import envConfig from '@/config'
import { PrismaErrorCode } from '@/constants/error-reference'
import prisma from '@/database'
import { LoginBodyType, RegisterBodyType } from '@/schemaValidations/auth.schema'
import { comparePassword, hashPassword } from '@/utils/crypto'
import { EntityError, isPrismaClientKnownRequestError, AuthError } from '@/utils/errors'
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '@/utils/jwt'
import { addMilliseconds } from 'date-fns'
import ms from 'ms'

export const registerController = async (body: RegisterBodyType) => {
  try {
    const hashedPassword = await hashPassword(body.password)
    const account = await prisma.account.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword
      }
    })

    // Tạo access token và refresh token
    const accessToken = signAccessToken({ userId: account.id })
    const refreshToken = signRefreshToken({ userId: account.id })

    const accessTokenExpiresAt = addMilliseconds(new Date(), ms(envConfig.ACCESS_TOKEN_EXPIRES_IN))
    const refreshTokenExpiresAt = addMilliseconds(new Date(), ms(envConfig.REFRESH_TOKEN_EXPIRES_IN))

    const session = await prisma.session.create({
      data: {
        accountId: account.id,
        token: accessToken,
        refreshToken: refreshToken,
        expiresAt: accessTokenExpiresAt,
        refreshTokenExpiresAt: refreshTokenExpiresAt
      }
    })
    return {
      account,
      session
    }
  } catch (error: any) {
    if (isPrismaClientKnownRequestError(error)) {
      if (error.code === PrismaErrorCode.UniqueConstraintViolation) {
        throw new EntityError([{ field: 'email', message: 'Email đã tồn tại' }])
      }
    }
    throw error
  }
}

export const loginController = async (body: LoginBodyType) => {
  const account = await prisma.account.findUnique({
    where: {
      email: body.email
    }
  })
  if (!account) {
    throw new EntityError([{ field: 'email', message: 'Email không tồn tại' }])
  }
  const isPasswordMatch = await comparePassword(body.password, account.password)
  if (!isPasswordMatch) {
    throw new EntityError([{ field: 'password', message: 'Email hoặc mật khẩu không đúng' }])
  }

  // Tạo access token và refresh token
  const accessToken = signAccessToken({ userId: account.id })
  const refreshToken = signRefreshToken({ userId: account.id })

  const accessTokenExpiresAt = addMilliseconds(new Date(), ms(envConfig.ACCESS_TOKEN_EXPIRES_IN))
  const refreshTokenExpiresAt = addMilliseconds(new Date(), ms(envConfig.REFRESH_TOKEN_EXPIRES_IN))

  const session = await prisma.session.create({
    data: {
      accountId: account.id,
      token: accessToken,
      refreshToken: refreshToken,
      expiresAt: accessTokenExpiresAt,
      refreshTokenExpiresAt: refreshTokenExpiresAt
    }
  })
  return {
    account,
    session
  }
}

export const logoutController = async (sessionToken: string) => {
  await prisma.session.delete({
    where: {
      token: sessionToken
    }
  })
  return 'Đăng xuất thành công'
}

/**
 * Refresh Access Token - Rotate cả access token và refresh token
 * @param refreshToken - Refresh token hiện tại
 */
export const refreshAccessTokenController = async (refreshToken: string) => {
  // 1. Verify refresh token
  try {
    verifyRefreshToken(refreshToken)
  } catch (error) {
    throw new AuthError('Refresh token không hợp lệ hoặc đã hết hạn')
  }

  // 2. Tìm session trong database by refreshToken
  const session = await prisma.session.findUnique({
    where: { refreshToken: refreshToken },
    include: { account: true }
  })

  if (!session) {
    throw new AuthError('Refresh token không tồn tại trong hệ thống')
  }

  // 3. Check refresh token expiration (handle nullable cho legacy sessions)
  if (!session.refreshTokenExpiresAt || new Date() > session.refreshTokenExpiresAt) {
    // Delete expired session
    await prisma.session.delete({
      where: { token: session.token }
    })
    throw new AuthError('Refresh token đã hết hạn. Vui lòng đăng nhập lại')
  }

  // 4. Tạo access token và refresh token mới (token rotation)
  const newAccessToken = signAccessToken({ userId: session.accountId })
  const newRefreshToken = signRefreshToken({ userId: session.accountId })

  const newAccessTokenExpiresAt = addMilliseconds(new Date(), ms(envConfig.ACCESS_TOKEN_EXPIRES_IN))
  const newRefreshTokenExpiresAt = addMilliseconds(new Date(), ms(envConfig.REFRESH_TOKEN_EXPIRES_IN))

  // 5. Update session trong database với token pair mới
  const updatedSession = await prisma.session.update({
    where: { token: session.token },
    data: {
      token: newAccessToken,
      refreshToken: newRefreshToken,
      expiresAt: newAccessTokenExpiresAt,
      refreshTokenExpiresAt: newRefreshTokenExpiresAt
    }
  })

  return {
    session: updatedSession,
    account: session.account
  }
}

/**
 * Tăng thời gian hết hạn của session token lên (Legacy - backward compatibility)
 * @param sessionToken
 */
export const slideSessionController = async (sessionToken: string) => {
  const expiresAt = addMilliseconds(new Date(), ms(envConfig.SESSION_TOKEN_EXPIRES_IN))
  return prisma.session.update({
    where: {
      token: sessionToken
    },
    data: {
      expiresAt
    }
  })
}
