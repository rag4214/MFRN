import fastify from 'fastify';
import cookie from 'fastify-cookie';
import formbody from 'fastify-formbody';

const createApp = () => {
  const app = fastify({ logger: true, trustProxy: true });

  app.register(cookie);
  app.register(formbody);

  return app;
};

export default createApp;
