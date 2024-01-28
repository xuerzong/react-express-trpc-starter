import { type Express } from 'express'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { router } from '@server/libs/trpc'
import baseRouter from './base'

const appRouter = router({
  base: baseRouter
})

export default appRouter

export type AppRouter = typeof appRouter

export function useTrpcRouter(app: Express) {
  app.use('/trpc', createExpressMiddleware({ router: appRouter }))
}