// index.ts — async factory pattern for Vercel (no top-level await)
import createApp from './src/app/app'

let _app: Awaited<ReturnType<typeof createApp>>

const getApp = async () => {
  if (!_app) _app = await createApp()
  return _app
}

export default {
  fetch: async (req: Request) => {
    const app = await getApp()
    return app.fetch(req)
  },
}
