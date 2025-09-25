import { OpenAPIHono as Hono } from '@hono/zod-openapi';
import type { AppBindings } from '~/lib/types';
import defaultHook from './defaultHook';

export const createApp = () => {
  return new Hono<AppBindings>({
    defaultHook
  });
};

/**
 * `createRouter` is an alias of `createApp`
 */
export const createRouter = createApp;
