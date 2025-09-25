import { createRoute } from '@hono/zod-openapi';
import { responseFailure, responseSuccess } from '~/api/support';
import { STATUS } from '~/lib/constants';
import { tasksSchema } from '../schemas';

export const getTasksRoute = createRoute({
  path: '/tasks',
  method: 'get',
  operationId: 'getTasks',
  description: 'Returns all tasks',
  tasks: ['Tasks'],

  responses: {
    [STATUS.OK]: responseSuccess({
      data: {
        tasks: tasksSchema
      },
      description: 'Success'
    }),

    [STATUS.INTERNAL_SERVER_ERROR]: responseFailure({
      code: 'UNEXPECTED_ERROR',
      description: 'Internal Server Error'
    })
  }
});

export type GetTasksRoute = typeof getTasksRoute;
