# react-express-trpc-starter

## Stack

- **Monorepo**: Turborepo + npm workspaces
- **Client**: React 19, React Router 7, Vite 8, TypeScript 6
- **Server**: Express 5, tRPC 11, Zod 4, TypeScript 6
- **Tooling**: Prettier, Husky, lint-staged, Dependabot

## Development

Install dependencies:

```bash
npm install
```

Run both client and server:

```bash
npm run dev
```

Run individually:

```bash
npm run dev:client   # client only
npm run dev:server   # server only
```

## Build

Build the client for production:

```bash
npm run build -w client
```

Output: `apps/client/dist/`
