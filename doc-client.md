# CLIENT DOCUMENTATION

## Tổng quan
Client được xây dựng với Next.js 14 App Router, sử dụng TypeScript và các công nghệ hiện đại cho UI/UX.

## Công nghệ sử dụng

### Core Framework
- **Next.js 14.2.30**: React framework với App Router
- **React 18**: UI library
- **TypeScript 5**: Type-safe JavaScript

### UI & Styling
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **tailwindcss-animate 1.0.7**: Animation utilities
- **Radix UI**: Headless UI components
  - `@radix-ui/react-dialog`: Modal dialogs
  - `@radix-ui/react-dropdown-menu`: Dropdown menus
  - `@radix-ui/react-label`: Form labels
  - `@radix-ui/react-slot`: Component composition
- **class-variance-authority (CVA) 0.7.1**: Variant management cho components
- **clsx 2.1.1**: Utility cho conditional classes
- **tailwind-merge 3.3.1**: Merge Tailwind classes safely

### Form & Validation
- **react-hook-form 7.60.0**: Form state management
- **@hookform/resolvers 5.1.1**: Validation resolvers
- **zod 4.0.2**: Schema validation

### Icons & Themes
- **lucide-react 0.525.0**: Icon library
- **next-themes 0.4.6**: Theme management (dark/light mode)

### Image Processing
- **sharp 0.34.3**: High performance image processing

## Cấu trúc thư mục

```
client/
├── public/           # Static files
├── src/
│   ├── app/         # App Router pages & layouts
│   │   ├── (auth)/  # Auth route group
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── layout.tsx
│   │   ├── contact/
│   │   ├── menu/
│   │   ├── order/
│   │   ├── fonts/
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   ├── components/  # Reusable UI components
│   │   ├── ui/      # Base UI components
│   │   ├── header.tsx
│   │   └── mode-toggle.tsx
│   ├── lib/         # Utility functions
│   │   └── utils.ts
│   ├── hooks/       # Custom React hooks
│   ├── schemaValidations/  # Zod schemas
│   │   └── auth.schema.ts
│   └── config.ts    # Environment config
```

## Routes & Pages

### Public Routes
- `/` - Homepage
- `/menu` - Menu page
- `/contact` - Contact page
- `/order` - Order page

### Auth Routes (Route Group)
- `/login` - Đăng nhập với form validation
- `/register` - Đăng ký tài khoản mới

## Components Architecture

### Layout System
- Root Layout (`app/layout.tsx`): Theme provider, fonts, metadata
- Auth Layout (`app/(auth)/layout.tsx`): Layout riêng cho auth pages

### Form Components
- `LoginForm` (`login/login-form.tsx`): Form đăng nhập với React Hook Form
- `RegisterForm` (`register/register-form.tsx`): Form đăng ký với validation

### UI Components
- `Header`: Navigation header
- `ModeToggle`: Dark/light mode switcher
- Radix UI components được custom với Tailwind

## API Integration

### Configuration
```typescript
// src/config.ts
NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
```

### Schema Validations
Sử dụng Zod schemas để validate dữ liệu:
- `auth.schema.ts`: Login, Register validation schemas

## Styling System

### Tailwind Configuration
- Custom animations với tailwindcss-animate
- Dark mode support với next-themes
- Custom color scheme và spacing

### Global Styles
- Font: Định nghĩa trong `app/fonts/`
- Base styles: `app/globals.css`
- Component variants: Sử dụng CVA

## Development Workflow

### Scripts
```bash
npm run dev    # Development server (port 3000)
npm run build  # Production build
npm run start  # Run production
npm run lint   # ESLint checking
```

### TypeScript Configuration
- Strict mode enabled
- Path alias: `@/*` → `./src/*`
- Target: ESNext với module bundler

### Build & Optimization
- Image optimization với Next.js Image và Sharp
- Font optimization với Next.js Font
- Automatic code splitting

## Environment Variables
```env
# .env.local
NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000
```

## Best Practices
1. Sử dụng Server Components khi có thể
2. Client Components chỉ khi cần interactivity
3. Form validation với Zod schemas
4. Responsive design với Tailwind breakpoints
5. Accessibility với Radix UI components
6. Type-safe với TypeScript strict mode