import createApp from '@/app/app';
import { handle } from 'hono/vercel';

let appPromise: ReturnType<typeof createApp> | null = null;

const getApp = async () => {
  if (!appPromise) {
    appPromise = createApp();
  }
  return await appPromise;
};

const handler = async (req: Request) => {
  const app = await getApp();
  return handle(app)(req);
};

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;

// Or, simpler all-in-one:
export default async function appHandler(req: Request) {
  const app = await getApp();
  return handle(app)(req);
}
