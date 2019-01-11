const Hapi = require('hapi');
const routesBlogs = require('./routes/blogs');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');
require('env2')('./.env');
const { env } = process;

const server = new Hapi.Server();

server.connection({
  host: env.HOST,
  port: env.PORT
});

const start = async () => {
  await server.register([
    ...pluginHapiSwagger,
    pluginHapiPagination
  ]);
  server.route([
    ...routesBlogs
  ]);
  await server.start();
  console.log(`Server running at : ${server.info.uri}`);
}

start();