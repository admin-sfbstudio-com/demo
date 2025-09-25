import type { OpenAPIHono, RouteConfig, RouteHandler } from '@hono/zod-openapi';

export type AppBindings = {
  Variables: {
    queries: () => Record<string, any>; // for query params
  };
};

export type App = OpenAPIHono<AppBindings>;

export type AppRouteHandler<T extends RouteConfig> = RouteHandler<
  T,
  AppBindings
>;
