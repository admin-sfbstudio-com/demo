import { serve } from 'bun';
import { AppSettings } from '~/lib';
import app from './app';

const port = AppSettings.get('PORT');

console.info(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
});
