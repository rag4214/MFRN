// https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-fastify

import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
  PluginDefinition,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-fastify';
import { FastifyInstance } from 'fastify';

import schema from './schema';

const fastifyAppClosePlugin = (app: FastifyInstance): PluginDefinition => ({
  async serverWillStart() {
    return {
      async drainServer() {
        await app.close();
      },
    };
  },
});

const createServer = async (app: FastifyInstance) => {
  const server = new ApolloServer({
    schema: await schema,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageLocalDefault(),
      fastifyAppClosePlugin(app),
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
    ],
  });
  await server.start();

  app.register(server.createHandler());

  return server;
};

export default createServer;
