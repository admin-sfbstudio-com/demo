import type { ERROR_CODE } from '~/lib/constants';

type Args = {
  code: ERROR_CODE;
  message?: string;
  cause?: Error | Record<string, any> | string;
  extra?: Record<string, any>;
};

export class ServiceError extends Error {
  code: ERROR_CODE;
  message: string;
  cause?: Error | Record<string, any> | string;
  extra: Record<string, any> | undefined;

  constructor({ code, message, cause, extra }: Args) {
    super();

    this.name = this.constructor.name;
    this.code = code;
    this.message = message ?? `Thrown with code ${code}`;
    this.cause = cause;
    this.extra = extra;
  }
}

export const isServiceError = (error: any) => {
  return error instanceof ServiceError;
};
