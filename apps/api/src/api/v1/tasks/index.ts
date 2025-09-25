import { createRouter } from '~/lib';
import { getTasksHandler } from './handlers';
import { getTasksRoute } from './routes';

export const tasks = createRouter().openapi(getTasksRoute, getTasksHandler);
