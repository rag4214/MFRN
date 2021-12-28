import createServer from './apollo';
import createApp from './fastify';
import connectToDB from './mongoose';

(async () => {
  const db = await connectToDB();
  console.log(`🍃 Connected to MongoDB at: mongodb://${db.connection.user || ''}${db.connection.host}:${db.connection.port}/${db.connection.name}`);

  const app = createApp();
  const server = await createServer(app);

  const url = await app.listen(3000, '0.0.0.0');
  console.log(`🐅 Fastify Server ready at: ${url}`);
  console.log(`🚀 Apollo Server ready at: ${url}${server.graphqlPath}`);
})();
