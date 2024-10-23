// @ts-check
import { h } from "preact";
import render from "preact-render-to-string";
import path from "path";

// import {} from "@fastify/formbody";

// const DB = new Map(["users", [{ username: "admin", pass: "1234" }]]);
export const DB = {
  users: [{ username: "admin", pass: "1234", id: "klsf290kdasd23-dl" }],
  sessions: {},
};

import pages from "./preact/pages/index.js";
import adminPages from "./preact/pages/AdminIndex";

import htmlShell from "./templates/default";
import htmlShellAdmin from "./templates/admin";
import htmlShellNotFound from "./templates/notFound";

import sendRecall from "./api/sendRecall";
import NotFound from "./preact/pages/NotFound";

const PORT = process.env.PORT || 8888;
const HOST = process.env.HOST || "localhost";
const apiUrl =
  process.env.NODE_ENV === "development"
    ? `http://${HOST}:${PORT}`
    : `https://${HOST}`;

console.log(process.env.NODE_ENV);

const fastify = require("fastify");
const fastifyStatic = require("@fastify/static");
const cookie = require("@fastify/cookie");
const formBody = require("@fastify/formbody");
const cors = require("@fastify/cors");

// FASTIFY CONFIG
const app = fastify({ logger: process.env.NODE_ENV === "development" });

app.register(cors, {
  origin: true, // Разрешить запросы от любых источников (можно ограничить определенным URL)
  methods: ["POST", "GET"], // Укажите методы, которые должны быть разрешены
});

app.register(cookie, {
  secret: "my-secret", // for cookies signature
  hook: "onRequest", // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
  parseOptions: {}, // options for parsing cookies
});

app.register(formBody);

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
      return htmlShell(
        render(<page.component uid={uid} />),
        page.title,
        apiUrl,
      );
    },
  }),
);

adminPages.forEach((page) =>
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
      return htmlShellAdmin(
        render(<page.component uid={uid} />),
        page.title,
        apiUrl,
      );
    },
  }),
);

app.setNotFoundHandler((request, reply) => {
  const ext = path.extname(request.url);

  // Если запрос на файл с расширением, например .png, .jpg, .css и т.д., пропускаем его
  if ([".png", ".jpg", ".jpeg", ".css", ".js", ".svg", ".ico"].includes(ext)) {
    reply.callNotFound(); // Используем стандартный обработчик Fastify
    return;
  }

  const html = htmlShellNotFound(
    render(<NotFound />),
    "Страница не найдена",
    apiUrl,
  );

  // Если это не статический файл, возвращаем HTML
  reply.code(404).type("text/html").send(html);
});

app.post("/auth/login", async (request, reply) => {
  const { login, pass } = request.body;
  console.log(login, pass);

  reply.status(200).send(JSON.stringify({ ok: true }));
});

app.post("/sendRecall", sendRecall);

app.register(fastifyStatic, {
  root: path.join(__dirname, "../public"),
  wildcard: false,
});

const start = async () => {
  try {
    app.listen({
      port: PORT,
      host: HOST,
    });
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();
