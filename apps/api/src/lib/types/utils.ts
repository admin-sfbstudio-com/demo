import type {
  BuildQueryResult,
  DBQueryConfig,
  ExtractTablesWithRelations
} from 'drizzle-orm';
import type * as schema from '~/lib/data-clients/drizzle';

type TSchema = ExtractTablesWithRelations<typeof schema>;
type QueryConfig<TableName extends keyof TSchema> = DBQueryConfig<
  'one' | 'many',
  boolean,
  TSchema,
  TSchema[TableName]
>;

export type InferQueryModel<TableName extends keyof TSchema> = BuildQueryResult<
  TSchema,
  TSchema[TableName],
  QueryConfig<TableName>
>;

export type ExtractServiceResultType<T, K extends string> = Extract<
  Awaited<ReturnType<T extends (...args: any) => any ? T : never>>,
  Record<K, any>
>[K];
