import { z } from 'zod';

export const taskSchema = z
  .object({
    id: z.string().min(29),
    name: z.string().min(1),
    createdAt: z.date(),
    updatedAt: z.date()
  })
  .openapi('Task');

export const tasksSchema = z.array(taskSchema);
