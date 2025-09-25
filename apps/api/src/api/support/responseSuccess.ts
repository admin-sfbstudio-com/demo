import { z } from 'zod';

type Description = 'Success' | 'Created' | 'No Content';

type Args<T> = {
  data?: T;
  description: Description;
};

export const responseSuccess = <T>({
  data = {} as T,
  description
}: Args<T>) => {
  return {
    content: {
      'application/json': {
        schema: z.object({
          success: z.literal(true),
          ...data
        })
      }
    },

    description
  };
};
