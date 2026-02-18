import envConfig from '@/config'
import { TokenType } from '@/constants/type'
import { TokenPayload } from '@/types/jwt.types'
import { SignerOptions, createSigner, createVerifier } from 'fast-jwt'
import ms from 'ms'

// Access Token - ngắn hạn (15 phút)
export const signAccessToken = (payload: Pick<TokenPayload, 'userId'>, options?: SignerOptions) => {
  const signSync = createSigner({
    key: envConfig.ACCESS_TOKEN_SECRET,
    algorithm: 'HS256',
    expiresIn: ms(envConfig.ACCESS_TOKEN_EXPIRES_IN),
    ...options
  })
  return signSync({ ...payload, tokenType: TokenType.AccessToken })
}

export const verifyAccessToken = (token: string) => {
  const verifySync = createVerifier({
    key: envConfig.ACCESS_TOKEN_SECRET
  })
  return verifySync(token) as TokenPayload
}

// Refresh Token - dài hạn (7 ngày)
export const signRefreshToken = (payload: Pick<TokenPayload, 'userId'>, options?: SignerOptions) => {
  const signSync = createSigner({
    key: envConfig.REFRESH_TOKEN_SECRET,
    algorithm: 'HS256',
    expiresIn: ms(envConfig.REFRESH_TOKEN_EXPIRES_IN),
    ...options
  })
  return signSync({ ...payload, tokenType: TokenType.RefreshToken })
}

export const verifyRefreshToken = (token: string) => {
  const verifySync = createVerifier({
    key: envConfig.REFRESH_TOKEN_SECRET
  })
  return verifySync(token) as TokenPayload
}

// Legacy Session Token - backward compatibility
export const signSessionToken = (payload: Pick<TokenPayload, 'userId'>, options?: SignerOptions) => {
  const signSync = createSigner({
    key: envConfig.SESSION_TOKEN_SECRET,
    algorithm: 'HS256',
    expiresIn: ms(envConfig.SESSION_TOKEN_EXPIRES_IN),
    ...options
  })
  return signSync({ ...payload, tokenType: TokenType.SessionToken })
}

export const verifySessionToken = (token: string) => {
  const verifySync = createVerifier({
    key: envConfig.SESSION_TOKEN_SECRET
  })
  return verifySync(token) as TokenPayload
}
