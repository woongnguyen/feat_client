# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

Dự án này là một ứng dụng full-stack với:
- **Client**: Next.js 14 app với TypeScript, Tailwind CSS, Radix UI, và React Hook Form
- **Server**: Fastify API server với Prisma ORM, SQLite database

## Development Commands

### Client (trong thư mục `/client`)
```bash
npm run dev      # Chạy development server (port 3000)
npm run build    # Build production
npm run start    # Chạy production build
npm run lint     # Chạy ESLint
```

### Server (trong thư mục `/server`)
```bash
npm run dev         # Chạy development với nodemon
npm run build       # Build TypeScript
npm run start       # Chạy production
npm run lint        # Chạy ESLint
npm run lint:fix    # Fix lỗi ESLint
npm run prettier    # Kiểm tra formatting
npm run prettier:fix # Fix formatting

# Prisma commands
npx prisma generate  # Generate Prisma Client
npx prisma migrate dev # Chạy migrations
npx prisma studio    # Mở Prisma Studio
```

## Architecture Overview

### Client Architecture
- **App Router**: Sử dụng Next.js 14 App Router với file-based routing
- **Authentication**: Xử lý auth trong `(auth)` route group với login/register forms
- **Components**: Shared UI components trong `/client/src/components`
- **Form Validation**: Zod schemas trong `/client/src/schemaValidations`
- **API Communication**: Config endpoint trong `/client/src/config.ts`
- **Styling**: Tailwind CSS với custom theme và animations

### Server Architecture
- **Framework**: Fastify với TypeScript
- **Database**: SQLite với Prisma ORM
  - Models: Account, Session, Product
  - Database file: `/server/prisma/dev.db`
- **Authentication**: JWT-based với session tokens
  - Có thể dùng cookie hoặc header Authorization
  - Config qua COOKIE_MODE trong .env
- **Routes**:
  - `/auth` - Authentication endpoints
  - `/account` - Account management
  - `/products` - Product CRUD
  - `/media` - File uploads
- **File Structure**:
  - Controllers trong `/server/src/controllers`
  - Routes trong `/server/src/routes`
  - Validation schemas trong `/server/src/schemaValidations`
  - Plugins trong `/server/src/plugins`

## Environment Variables

### Client (.env.local)
```
NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000
```

### Server (.env)
```
PORT=4000
DATABASE_URL="file:./dev.db"
SESSION_TOKEN_SECRET=[secret_key]
SESSION_TOKEN_EXPIRES_IN=365d
COOKIE_MODE=false
UPLOAD_FOLDER=uploads
IS_PRODUCTION=false
```

## Key Technologies

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS, Radix UI, React Hook Form, Zod
- **Backend**: Fastify, Prisma, SQLite, TypeScript, JWT, Zod validation
- **Development**: ESLint, Prettier, Nodemon

## Import Aliases
- Client: `@/*` maps to `/client/src/*`
- Server: `@/*` maps to `/server/src/*`