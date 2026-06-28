import type { HealthResponse } from '@packages/schemas/health.schema'
import { env } from '@packages/env/app.env'

export const getHealthStatus = (): HealthResponse => ({
  status:    'ok',
  message:   'Server is running',
  timestamp: new Date().toISOString(),
  env:       env.NODE_ENV,
})
