import type { Context } from 'hono';
import { createMiddleware } from 'hono/factory';
import { logger as _logger } from 'hono/logger';
import type { AppBindings } from '~/lib/types';

const customLogger =
  (c: Context<AppBindings>) =>
  (message: string, ...rest: string[]) => {
    const [direction, method, path, status, ms] = message.split(' ');

    // Don't log incoming since it won't yet have status or ms
    if (direction === '<--') return;

    console.info(method, status, path, ms, c.get('requestId'), ...rest);
  };

export const logger = () => {
  return createMiddleware<AppBindings>(async (c, next) => {
    await _logger(customLogger(c))(c, next);
  });
};
