import envConfig from '@/config'
import prisma from '@/database'
import { AuthError } from '@/utils/errors'
import { verifyAccessToken } from '@/utils/jwt'
import { FastifyRequest } from 'fastify'

export const requireLoginedHook = async (request: FastifyRequest) => {
  const accessToken = envConfig.COOKIE_MODE ? request.cookies.accessToken : request.headers.authorization?.split(' ')[1]

  if (!accessToken) throw new AuthError('Không nhận được access token')

  // Verify JWT access token
  try {
    verifyAccessToken(accessToken)
  } catch {
    throw new AuthError('Access Token không hợp lệ')
  }

  // Verify session exists trong database
  const session_row = await prisma.session.findUnique({
    where: {
      token: accessToken as string
    },
    include: {
      account: true
    }
  })

  if (!session_row) {
    throw new AuthError('Access Token không tồn tại')
  }

  // Check access token chưa expire
  if (new Date() > session_row.expiresAt) {
    throw new AuthError('Access Token đã hết hạn')
  }

  request.account = session_row.account
}
