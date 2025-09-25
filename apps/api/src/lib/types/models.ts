import type { InferSelectModel } from 'drizzle-orm';
import type { tasks } from '~/lib/data-clients/drizzle';

type Task = Required<InferSelectModel<typeof tasks>>;

export type { Task };
