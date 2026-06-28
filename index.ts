import type { VercelRequest } from '@vercel/node'
import createApp from './src/app/app'

let cachedApp: Awaited<ReturnType<typeof createApp>> | null = null

async function getApp() {
  if (!cachedApp) {
    cachedApp = await createApp()
  }
  return cachedApp
}

export default async function handler(req: VercelRequest) {
  const app = await getApp()
  return app.fetch(req as unknown as Request)
}
