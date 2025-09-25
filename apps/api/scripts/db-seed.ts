import { seed } from '../src/lib/data-clients/drizzle/scripts';

try {
  await seed();

  process.exit(0);
} catch (err) {
  console.error('Seeding process exited with an error:', err);
  process.exit(1);
}
