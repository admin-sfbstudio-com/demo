import { STATUS } from '~/lib/constants';
import type { AppRouteHandler } from '~/lib/types';
import { getTasksAction } from '../actions';
import type { GetTasksRoute as Route } from '../routes';

export const getTasksHandler: AppRouteHandler<Route> = async c => {
  const result = await getTasksAction();

  if (result.success) {
    return c.json(result, STATUS.OK);
  }

  return c.json(result, STATUS.INTERNAL_SERVER_ERROR);
};
