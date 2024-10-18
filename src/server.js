import { h } from "preact";
import render from "preact-render-to-string";
import path from "path";

import pages from "./preact/pages/index";
import htmlShell from "./templates/default";

const fastify = require("fastify");
const fastifyStatic = require("@fastify/static");

// FASTIFY CONFIG
const app = fastify({ logger: true });

// ROUTES
pages.forEach((page) =>
  app.route({
    method: "GET",
    url: page.route,
    schema: {
      response: {
        200: {
          type: "string",
        },
      },
    },
    handler: function (request, response) {
      response.header("Content-Type", "text/html; charset=utf-8");
      const { uid } = request.params;
      if (uid) {
        return htmlShell(render(<page.component uid={uid} />));
      }
      return htmlShell(render(<page.component />));
    },
  }),
);

app.register(fastifyStatic, {
  root: path.join(__dirname, "../public"),
  wildcard: false,
});

const start = async () => {
  try {
    await app.listen({ port: 8888 });
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();
