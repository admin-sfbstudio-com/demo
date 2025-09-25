import { requestId } from 'hono/request-id';
import { secureHeaders } from 'hono/secure-headers';
import { trimTrailingSlash } from 'hono/trailing-slash';
import cors from './cors';

export { handleError } from './handleError';
export { logger } from './logger';

export default [cors(), requestId(), secureHeaders(), trimTrailingSlash()];
