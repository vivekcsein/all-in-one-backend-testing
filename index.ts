import createApp from '@/app/app';
import { handle } from 'hono/vercel';

const app = createApp();

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
