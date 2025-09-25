import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Config } from 'drizzle-kit';
import { defineConfig } from 'drizzle-kit';
import { AppSettings } from '~/lib';

const CURRENT_DIR = path.relative(
  process.cwd(),
  path.dirname(fileURLToPath(import.meta.url))
);

const environment = AppSettings.get('ENVIRONMENT');

// biome-ignore lint/style/noNonNullAssertion: ignore
const url = AppSettings.get('DATABASE_URL')!;

const config: Config = {
  dbCredentials: {
    url,
    ...(!AppSettings.isDev() && {
      ssl: {
        rejectUnauthorized: true,
        ca: AppSettings.get('DATABASE_CA_CERT')
      }
    })
  },
  dialect: 'postgresql',
  migrations: {
    table: `__drizzle_migrations_${environment}`,
    prefix: 'timestamp'
  },
  out: `${CURRENT_DIR}/migrations`,
  schema: `${CURRENT_DIR}/schemas/index.ts`,
  verbose: true
};

export default defineConfig(config);
