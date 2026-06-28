import { handle } from 'hono/vercel';
import createApp from './src/app/app';

export default handle(await createApp());
