# SERVER DOCUMENTATION

## Tổng quan
Server được xây dựng với Fastify framework, sử dụng TypeScript và Prisma ORM để quản lý cơ sở dữ liệu SQLite.

## Công nghệ sử dụng

### Core Framework
- **Fastify 4.26.0**: High performance web framework
- **TypeScript 5.3.3**: Type-safe JavaScript
- **Node.js**: Runtime environment

### Database & ORM
- **Prisma 5.10.2**: Modern database toolkit
- **@prisma/client 5.10.2**: Type-safe database client
- **SQLite**: File-based database

### Security & Authentication
- **fast-jwt 4.0.0**: JWT token management
- **bcrypt 5.1.1**: Password hashing
- **@fastify/helmet 11.1.1**: Security headers
- **@fastify/cors 9.0.1**: CORS handling
- **@fastify/auth 4.6.0**: Authentication plugin

### Validation & Utilities
- **zod 3.22.4**: Schema validation
- **fastify-type-provider-zod 1.1.9**: Zod integration
- **date-fns 3.3.1**: Date utilities
- **ms 2.1.3**: Time parsing

### File Handling
- **@fastify/multipart 8.1.0**: File upload
- **@fastify/static 7.0.1**: Static file serving
- **@fastify/cookie 9.3.1**: Cookie handling

### Development Tools
- **nodemon 3.0.3**: Development auto-reload
- **tsx 4.7.1**: TypeScript execution
- **ts-node 10.9.2**: TypeScript Node.js
- **tsc-alias 1.8.8**: Path alias resolution
- **eslint + prettier**: Code quality

## Cấu trúc thư mục

```
server/
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── dev.db          # SQLite database file
├── src/
│   ├── controllers/    # Business logic
│   │   ├── auth.controller.ts
│   │   ├── account.controller.ts
│   │   ├── product.controller.ts
│   │   └── media.controller.ts
│   ├── routes/         # API routes
│   │   ├── auth.route.ts
│   │   ├── account.route.ts
│   │   ├── product.route.ts
│   │   ├── media.route.ts
│   │   ├── static.route.ts
│   │   └── test.route.ts
│   ├── plugins/        # Fastify plugins
│   ├── hooks/          # Request/Response hooks
│   │   └── auth.hooks.ts
│   ├── schemaValidations/  # Zod schemas
│   │   ├── auth.schema.ts
│   │   ├── product.schema.ts
│   │   └── common.schema.ts
│   ├── database/       # Database utilities
│   ├── utils/          # Helper functions
│   ├── types/          # TypeScript types
│   ├── constants/      # Application constants
│   ├── config.ts       # Environment configuration
│   ├── index.ts        # Server entry point
│   └── type.d.ts       # Global type definitions
├── uploads/            # Uploaded files directory
└── dist/              # Compiled JavaScript (production)
```

## Database Schema

### Models
```prisma
model Account {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String
  password  String
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  Session   Session[]
}

model Session {
  token     String   @id
  accountId Int
  account   Account  @relation(fields: [accountId], references: [id])
  expiresAt DateTime
  createdAt DateTime @default(now())
}

model Product {
  id          Int      @id @default(autoincrement())
  image       String
  name        String
  description String
  price       Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## API Endpoints

### Authentication Routes (`/auth`)
- `POST /auth/register`
  - Body: `{email, name, password, confirmPassword}`
  - Response: `{data: {account, sessionToken}, message}`

- `POST /auth/login`
  - Body: `{email, password}`
  - Response: `{data: {account, sessionToken}, message}`

- `POST /auth/logout`
  - Headers: `Authorization: Bearer <token>` hoặc Cookie
  - Response: `{message}`

- `POST /auth/slide-session`
  - Headers: `Authorization: Bearer <token>` hoặc Cookie
  - Response: `{data: {sessionToken}, message}`

### Account Routes (`/accounts`)
- `GET /accounts/me`
  - Headers: `Authorization: Bearer <token>` hoặc Cookie
  - Response: `{data: {account}, message}`

- `PUT /accounts/me`
  - Headers: `Authorization: Bearer <token>` hoặc Cookie
  - Body: `{name}`
  - Response: `{data: {account}, message}`

### Product Routes (`/products`)
- `GET /products`
  - Response: `{data: [products], message}`

- `GET /products/:id`
  - Response: `{data: {product}, message}`

- `POST /products` (Auth required)
  - Body: `{name, description, price, image}`
  - Response: `{data: {product}, message}`

- `PUT /products/:id` (Auth required)
  - Body: `{name?, description?, price?, image?}`
  - Response: `{data: {product}, message}`

- `DELETE /products/:id` (Auth required)
  - Response: `{message}`

### Media Routes (`/media`)
- `POST /media/upload`
  - Form-data: `file`
  - Response: `{data: {file}, message}`

### Static Routes (`/static`)
- `GET /static/*`
  - Serves files from uploads directory

## Authentication System

### JWT Configuration
- **Secret**: Từ environment variable `SESSION_TOKEN_SECRET`
- **Expiry**: Configurable qua `SESSION_TOKEN_EXPIRES_IN` (default: 365d)
- **Modes**:
  - Cookie mode: `COOKIE_MODE=true`
  - Header mode: `COOKIE_MODE=false` (Authorization: Bearer)

### Password Security
- Sử dụng bcrypt để hash passwords
- Salt rounds: 10 (default)

### Session Management
- Sessions được lưu trong database
- Auto cleanup expired sessions
- Slide session để extend token lifetime

## Environment Configuration

```env
# Server
PORT=4000
DOMAIN=localhost
PROTOCOL=http

# Database
DATABASE_URL="file:./dev.db"

# JWT
SESSION_TOKEN_SECRET='your-secret-key'
SESSION_TOKEN_EXPIRES_IN=365d

# Features
COOKIE_MODE=false
UPLOAD_FOLDER=uploads
IS_PRODUCTION=false
PRODUCTION_URL=https://api.domain.com
```

## Development Scripts

```bash
# Development
npm run dev         # Start với nodemon (auto-reload)

# Production
npm run build       # Compile TypeScript
npm run start       # Run compiled code

# Database
npx prisma generate    # Generate Prisma Client
npx prisma migrate dev # Run migrations
npx prisma studio     # Open Prisma Studio

# Code Quality
npm run lint          # ESLint check
npm run lint:fix      # ESLint auto-fix
npm run prettier      # Prettier check
npm run prettier:fix  # Prettier auto-fix
```

## Plugin Architecture

### Registered Plugins
1. **@fastify/cors**: Cross-origin requests
2. **@fastify/helmet**: Security headers
3. **@fastify/cookie**: Cookie management
4. **@fastify/auth**: Authentication handling
5. **fastify-type-provider-zod**: Schema validation
6. **Custom error handler**: Error formatting
7. **Validator compiler**: Zod integration

### Request Flow
1. CORS + Security headers
2. Request validation (Zod schemas)
3. Authentication hooks (nếu required)
4. Controller execution
5. Response formatting
6. Error handling

## Security Features
- Helmet.js security headers
- CORS configuration
- JWT token validation
- Password hashing với bcrypt
- Request validation với Zod
- Protected routes với authentication hooks
- File upload validation

## Error Handling
- Centralized error handling plugin
- Structured error responses
- Validation error formatting
- HTTP status code mapping