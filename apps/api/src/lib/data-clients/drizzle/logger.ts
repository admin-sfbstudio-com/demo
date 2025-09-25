let isLoggingEnabled: boolean = true;

export const enableLogging = () => {
  isLoggingEnabled = true;
};

export const disableLogging = () => {
  isLoggingEnabled = false;
};

export const logger = {
  logQuery(query: string, params: unknown[]) {
    if (isLoggingEnabled) {
      let message = `Query: ${query}`;

      if (params.length) {
        message += ` -- params: ${JSON.stringify(params)}`;
      }

      console.info(message);
    }
  }
};
