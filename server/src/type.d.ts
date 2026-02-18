import { Account } from '@prisma/client'
declare global {
  interface BigInt {
    toJSON(): string
  }
}

declare module 'fastify' {
  interface FastifyInstance {}
  interface FastifyRequest {
    account?: Account
    cookies: {
      sessionToken?: string
      accessToken?: string
      refreshToken?: string
    }
  }
}
