import type { Task } from '~/lib/types';

export const serializeTask = (task: Task) => {
  return {
    id: task.id,
    name: task.name,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt
  };
};

export const serializeTasks = (items: Task[]) => {
  return items.map(task => {
    return serializeTask(task);
  });
};
