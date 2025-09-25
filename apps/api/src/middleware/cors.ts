import { cors as _cors } from 'hono/cors';

const origin = '*';

const cors = () => {
  return _cors({ origin });
};

export default cors;
