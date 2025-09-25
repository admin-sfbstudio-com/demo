import { ServiceError } from './ServiceError';

export class RepositoryError extends ServiceError {}

export const isRepositoryError = (error: any) => {
  return error instanceof RepositoryError;
};
