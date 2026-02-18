import envConfig from '@/config'
import {
  loginController,
  logoutController,
  slideSessionController,
  registerController,
  refreshAccessTokenController
} from '@/controllers/auth.controller'
import { requireLoginedHook } from '@/hooks/auth.hooks'
import {
  LoginBody,
  LoginBodyType,
  LoginRes,
  LoginResType,
  SlideSessionBody,
  SlideSessionBodyType,
  SlideSessionRes,
  SlideSessionResType,
  RegisterBody,
  RegisterBodyType,
  RegisterRes,
  RegisterResType,
  RefreshTokenBody,
  RefreshTokenBodyType,
  RefreshTokenRes,
  RefreshTokenResType
} from '@/schemaValidations/auth.schema'
import { MessageRes, MessageResType } from '@/schemaValidations/common.schema'
import { FastifyInstance } from 'fastify'

export default async function authRoutes(fastify: FastifyInstance) {
  // Register
  fastify.post<{
    Reply: RegisterResType
    Body: RegisterBodyType
  }>(
    '/register',
    {
      schema: {
        response: {
          200: RegisterRes
        },
        body: RegisterBody
      }
    },
    async (request, reply) => {
      const { body } = request
      const { session, account } = await registerController(body)
      if (envConfig.COOKIE_MODE) {
        reply
          .setCookie('accessToken', session.token, {
            path: '/',
            httpOnly: true,
            secure: true,
            expires: session.expiresAt,
            sameSite: 'none',
            domain: envConfig.DOMAIN
          })
          .setCookie('refreshToken', session.refreshToken as string, {
            path: '/',
            httpOnly: true,
            secure: true,
            expires: session.refreshTokenExpiresAt as Date,
            sameSite: 'none',
            domain: envConfig.DOMAIN
          })
          .send({
            message: 'Đăng ký thành công',
            data: {
              accessToken: session.token,
              refreshToken: session.refreshToken as string,
              expiresAt: session.expiresAt.toISOString(),
              account
            }
          })
      } else {
        reply.send({
          message: 'Đăng ký thành công',
          data: {
            accessToken: session.token,
            refreshToken: session.refreshToken as string,
            expiresAt: session.expiresAt.toISOString(),
            account
          }
        })
      }
    }
  )

  // Login
  fastify.post<{ Reply: LoginResType; Body: LoginBodyType }>(
    '/login',
    {
      schema: {
        response: {
          200: LoginRes
        },
        body: LoginBody
      }
    },
    async (request, reply) => {
      const { body } = request
      const { session, account } = await loginController(body)
      if (envConfig.COOKIE_MODE) {
        reply
          .setCookie('accessToken', session.token, {
            path: '/',
            httpOnly: true,
            secure: true,
            expires: session.expiresAt,
            sameSite: 'none',
            domain: envConfig.DOMAIN
          })
          .setCookie('refreshToken', session.refreshToken as string, {
            path: '/',
            httpOnly: true,
            secure: true,
            expires: session.refreshTokenExpiresAt as Date,
            sameSite: 'none',
            domain: envConfig.DOMAIN
          })
          .send({
            message: 'Đăng nhập thành công',
            data: {
              accessToken: session.token,
              refreshToken: session.refreshToken as string,
              expiresAt: session.expiresAt.toISOString(),
              account
            }
          })
      } else {
        reply.send({
          message: 'Đăng nhập thành công',
          data: {
            accessToken: session.token,
            refreshToken: session.refreshToken as string,
            expiresAt: session.expiresAt.toISOString(),
            account
          }
        })
      }
    }
  )

  // Refresh Token
  fastify.post<{ Reply: RefreshTokenResType; Body: RefreshTokenBodyType }>(
    '/refresh-token',
    {
      schema: {
        response: {
          200: RefreshTokenRes
        },
        body: RefreshTokenBody
      }
    },
    async (request, reply) => {
      const { body } = request
      const { session } = await refreshAccessTokenController(body.refreshToken)

      if (envConfig.COOKIE_MODE) {
        reply
          .setCookie('accessToken', session.token, {
            path: '/',
            httpOnly: true,
            secure: true,
            expires: session.expiresAt,
            sameSite: 'none',
            domain: envConfig.DOMAIN
          })
          .setCookie('refreshToken', session.refreshToken as string, {
            path: '/',
            httpOnly: true,
            secure: true,
            expires: session.refreshTokenExpiresAt as Date,
            sameSite: 'none',
            domain: envConfig.DOMAIN
          })
          .send({
            message: 'Refresh token thành công',
            data: {
              accessToken: session.token,
              refreshToken: session.refreshToken as string,
              expiresAt: session.expiresAt.toISOString()
            }
          })
      } else {
        reply.send({
          message: 'Refresh token thành công',
          data: {
            accessToken: session.token,
            refreshToken: session.refreshToken as string,
            expiresAt: session.expiresAt.toISOString()
          }
        })
      }
    }
  )

  // Logout
  fastify.post<{ Reply: MessageResType }>(
    '/logout',
    {
      schema: {
        response: {
          200: MessageRes
        }
      },
      preValidation: fastify.auth([requireLoginedHook])
    },
    async (request, reply) => {
      const accessToken = envConfig.COOKIE_MODE
        ? request.cookies.accessToken
        : request.headers.authorization?.split(' ')[1]
      const message = await logoutController(accessToken as string)
      if (envConfig.COOKIE_MODE) {
        reply
          .clearCookie('accessToken', {
            path: '/',
            httpOnly: true,
            sameSite: 'none',
            secure: true
          })
          .clearCookie('refreshToken', {
            path: '/',
            httpOnly: true,
            sameSite: 'none',
            secure: true
          })
          .send({
            message
          })
      } else {
        reply.send({
          message
        })
      }
    }
  )

  // Slide Session (Legacy - backward compatibility)
  fastify.post<{ Reply: SlideSessionResType; Body: SlideSessionBodyType }>(
    '/slide-session',
    {
      schema: {
        response: {
          200: SlideSessionRes
        },
        body: SlideSessionBody
      },
      preValidation: fastify.auth([requireLoginedHook])
    },
    async (request, reply) => {
      const sessionToken = envConfig.COOKIE_MODE
        ? request.cookies.sessionToken
        : request.headers.authorization?.split(' ')[1]
      const session = await slideSessionController(sessionToken as string)
      if (envConfig.COOKIE_MODE) {
        reply
          .setCookie('sessionToken', session.token, {
            path: '/',
            httpOnly: true,
            secure: true,
            expires: session.expiresAt,
            sameSite: 'none',
            domain: envConfig.DOMAIN
          })
          .send({
            message: 'Refresh session thành công',
            data: {
              token: session.token,
              account: request.account!,
              expiresAt: session.expiresAt.toISOString()
            }
          } as any) // Cast to any vì legacy schema khác với schema mới
      } else {
        reply.send({
          message: 'Refresh session thành công',
          data: {
            token: session.token,
            expiresAt: session.expiresAt.toISOString(),
            account: request.account!
          }
        } as any) // Cast to any vì legacy schema khác với schema mới
      }
    }
  )
}
