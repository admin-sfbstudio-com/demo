import { createId } from '@paralleldrive/cuid2';
import * as t from 'drizzle-orm/pg-core';

const tasks = t.pgTable('tasks', {
  id: t
    .text()
    .primaryKey()
    .unique()
    .notNull()
    .$defaultFn(() => createId()),

  name: t.text('name').notNull(),

  createdAt: t
    .timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: t
    .timestamp('updated_at', { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
});

export default tasks;
