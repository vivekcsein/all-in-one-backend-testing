import type { Hono } from 'hono';
import { handle } from 'hono/vercel';
import createApp from "./src/app/app";
import type { BlankEnv, BlankSchema } from 'hono/types';

const app = createApp();
const handler = handle(app as unknown as Hono<BlankEnv, BlankSchema, "/">);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
