import { Hono } from "hono";
// import { cors } from "hono/cors";
// import { logger } from "hono/logger";
// import { requestId } from "hono/request-id";
// import { secureHeaders } from "hono/secure-headers";

const createApp = async () => {

  // ── Hono app ───────────────────────────────────────────────────────────────────
  const app = new Hono();

  // // ── Global middleware ─────────────────────────────────────────────────────────

  // app.use("*", requestId());
  // app.use("*", logger());
  // app.use("*", secureHeaders());
  // app.use(
  //   "*",
  //   cors({
  //     origin: "*",
  //     credentials: true, // Required: allows the browser to send httpOnly cookies cross-origin
  //     allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  //     allowHeaders: ["Content-Type", "Authorization"],
  //   }),
  // );

  app.get('/', async (c) => {
    return c.text('Hello World!');
  });

  app.get('/health', async (c) => {
    return c.json({ status: 'ok' });
  });

  return app;
}

export default createApp;
