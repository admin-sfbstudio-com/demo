import type { ERROR_CODE } from '~/lib/constants';

function successResult(): { success: true };
function successResult<T>(data: T): { success: true } & T;

// Implementation
function successResult(data?: Record<string, unknown>) {
  if (!data) {
    return { success: true };
  }

  return {
    success: true,
    ...data
  };
}

function failureResult(): { success: false };
function failureResult(args: { code: ERROR_CODE }): {
  success: false;
  error: { code: ERROR_CODE };
};
function failureResult(args: { code: ERROR_CODE; message: string }): {
  success: false;
  error: { code: ERROR_CODE; message: string };
};

// Implementation
function failureResult(args?: { code: ERROR_CODE; message?: string }) {
  if (!args) {
    return { success: false };
  }

  if (args.code && !args.message) {
    return {
      success: false,
      error: {
        code: args.code
      }
    };
  }

  return {
    success: false,
    error: {
      code: args.code,
      message: args.message
    }
  };
}

export { failureResult, successResult };
