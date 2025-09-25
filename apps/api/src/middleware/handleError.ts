import type { Context } from 'hono';
import type { ERROR_CODE } from '~/lib/constants';
import { STATUS } from '~/lib/constants';
import type { AppBindings } from '~/lib/types';

export const handleError = (err: Error, c: Context<AppBindings>) => {
  console.error(err);

  return c.json(
    {
      error: {
        code: 'UNEXPECTED_ERROR' as ERROR_CODE,
        message: 'An unexpected error occurred. Try again later.'
      },
      success: false
    },
    STATUS.INTERNAL_SERVER_ERROR
  );
};
