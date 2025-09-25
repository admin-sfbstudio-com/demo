import { db } from '~/lib/data-clients/drizzle';
import { failureResult, successResult } from '~/lib/service-results';

export const fetchTasks = async () => {
  try {
    const tasks = await db.query.tasks.findMany({
      orderBy: (tasksTable, { desc }) => desc(tasksTable.createdAt)
    });

    return successResult({ tasks });
  } catch (err: any) {
    return failureResult({ code: 'UNEXPECTED_ERROR', message: err.message });
  }
};
