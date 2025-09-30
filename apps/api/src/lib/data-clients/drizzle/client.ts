import { drizzle } from 'drizzle-orm/node-postgres';
import type { PoolConfig } from 'pg';
import { Pool } from 'pg';
import { AppSettings } from '~/lib';
import { logger } from './logger';
import * as schema from './schemas';

const config: PoolConfig = {
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000
};

// Enable SSL verification with DigitalOcean CA certificate
config.ssl = {
  rejectUnauthorized: true,
  ca: AppSettings.get('DATABASE_CA_CERT')
};

const pool = new Pool({
  ...config,
  connectionString: AppSettings.get('DATABASE_URL')
});

export const db = drizzle(pool, { logger, schema });
