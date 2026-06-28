// Extend Hono's Context Variables type globally
// Add fields here that are set via app.use() middleware (e.g. auth user)
export type AppVariables = {
  requestId?: string
}
