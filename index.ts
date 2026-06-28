import createApp from '@/app/app';
import { handle } from 'hono/vercel';

const handler = async (req: Request) => {
  // Wait for the app to be created
  const app = await createApp();
  return handle(app)(req);
};

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;

// Or, if you want the simpler all-in-one:
export default async function appHandler(req: Request) {
  const app = await createApp();
  return handle(app)(req);
}
