import { z } from 'zod';
import type { ERROR_CODE } from '~/lib/constants';

type Description =
  | 'Unprocessable Entity'
  | 'Internal Server Error'
  | 'Not Found'
  | 'Bad Request';

type Args = {
  code: ERROR_CODE;
  description: Description;
};

export const responseFailure = ({ code, description }: Args) => {
  let error = z.object({
    code: z.literal(code),
    message: z.string().optional()
  });

  if (code === 'VALIDATION_ERROR') {
    error = error.extend({
      issues: z
        .array(
          z.object({
            code: z.string(),
            message: z.string().optional(),
            path: z.array(z.string())
          })
        )
        .optional()
    });
  }

  return {
    content: {
      'application/json': {
        schema: z.object({
          success: z.literal(false),
          error
        })
      }
    },

    description
  };
};
