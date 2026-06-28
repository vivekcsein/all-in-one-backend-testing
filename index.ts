import createApp from './src/app/app'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge',
}

const app = await createApp()

export default handle(app);
