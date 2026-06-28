import 'dotenv/config'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { secureHeaders } from 'hono/secure-headers'
import { prettyJSON } from 'hono/pretty-json'
import { requestId } from 'hono/request-id'
import { err } from '@packages/utils/response'
import { AppVariables } from './types/global'
import healthRoute from './app/api/health.route'

// ─── App instance ────────────────────────────────────────────────────────────
const app = new Hono<{ Variables: AppVariables }>()

// ─── Global middleware ────────────────────────────────────────────────────────
app.use('*', requestId())
app.use('*', logger())
app.use('*', secureHeaders())
app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
)
app.use('*', prettyJSON())

// ─── Routes ──────────────────────────────────────────────────────────────────
app.get('/', (c) => c.json({ message: 'Hono on Vercel 🔥', docs: '/health' }))
app.route('/health', healthRoute)

// ─── 404 handler ─────────────────────────────────────────────────────────────
app.notFound((c) => err(c, `Route ${c.req.path} not found`, 404))

// ─── Error handler ───────────────────────────────────────────────────────────
app.onError((error, c) => {
  return err(c, 'Internal Server Error', 500)
})

// ─── Default export — required by Vercel's Hono zero-config detection ────────
export default app
