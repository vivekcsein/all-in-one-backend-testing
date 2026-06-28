import { Hono } from 'hono'
import { ok } from '@packages/utils/response'
import { getHealthStatus } from './health.service'

const health = new Hono()

health.get('/', (c) => ok(c, getHealthStatus()))

export default health
