# Blocksmiths Monorepo

A monorepo containing a Wagmi-powered Web3 frontend and an Express backend.

## Structure

- `apps/frontend` - Next.js app with Wagmi for Web3 functionality
- `apps/backend` - Express.js API server
- `packages/` - Shared packages (future use)

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development servers:
   ```bash
   pnpm dev
   ```

3. Or start individual apps:
   ```bash
   # Frontend only
   pnpm dev:frontend
   
   # Backend only
   pnpm dev:backend
   ```

## Scripts

- `pnpm dev` - Start both frontend and backend in development mode
- `pnpm build` - Build all apps
- `pnpm lint` - Lint all apps
- `pnpm type-check` - Type check all apps

## Requirements

- Node.js >= 18
- pnpm >= 8