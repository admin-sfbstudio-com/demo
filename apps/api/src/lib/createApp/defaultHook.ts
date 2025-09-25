import type { Hook } from '@hono/zod-openapi';
import type { AppBindings } from '~/lib/types';
import type { ERROR_CODE } from '../constants';
import { STATUS } from '../constants';

const defaultHook: Hook<any, AppBindings, string, any> = (result, c) => {
  if (!result.success) {
    return c.json(
      {
        error: { ...result.error, code: 'VALIDATION_ERROR' as ERROR_CODE },
        success: false
      },
      STATUS.UNPROCESSABLE_ENTITY
    );
  }

  return result;
};

export default defaultHook;
