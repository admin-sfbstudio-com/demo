type Args<T> = {
  schema: T;
  required?: boolean;
};

export const requestBody = <T>({ schema, required }: Args<T>) => {
  return {
    content: {
      'application/json': {
        schema
      }
    },
    ...(required !== undefined && { required })
  };
};
