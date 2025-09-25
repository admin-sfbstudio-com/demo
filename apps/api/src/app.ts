import { STATUS } from '~/lib/constants';
import middleware, { handleError, logger } from '~/middleware';
import { tasks } from './api/v1';
import { createApp } from './lib';

const app = createApp();

app.get('/status', c => c.json({ success: true }, STATUS.OK));

app.use(...middleware);

app.use(logger());

app.route('/v1', tasks);

app.onError(handleError);

export default app;
