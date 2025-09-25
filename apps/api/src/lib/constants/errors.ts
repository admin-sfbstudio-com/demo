export const ERROR_CODES = ['UNEXPECTED_ERROR', 'VALIDATION_ERROR'] as const;

export type ERROR_CODE = (typeof ERROR_CODES)[number];
