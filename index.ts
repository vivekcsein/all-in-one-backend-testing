import createApp from '@/app/app';
import type { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = createApp();

// Async wrapper for flexibility
const handler = async (req: Request) => {
  return await handle(app as unknown as Hono)(req);
};

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;

// Or, if you prefer the simpler all-in-one:
export default handle(app as unknown as Hono);
