import healthCheckRouter from './health-check'
import { type Express } from 'express'

export const useApiRouter = (app: Express) => {
  app.use('/api/v1/health-check', healthCheckRouter)
}