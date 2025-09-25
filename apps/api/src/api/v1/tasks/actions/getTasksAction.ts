import { failureResult, successResult } from '~/lib/service-results';
import { fetchTasks } from '~/repos/tasks';
import { serializeTasks } from '../serializers';

export const getTasksAction = async () => {
  try {
    const result = await fetchTasks();

    if (!result.success) {
      return failureResult({ code: 'UNEXPECTED_ERROR' });
    }

    const tasks = serializeTasks(result.tasks);

    return successResult({ tasks });
  } catch (err: any) {
    console.error(err);

    return failureResult({ code: 'UNEXPECTED_ERROR' });
  }
};
