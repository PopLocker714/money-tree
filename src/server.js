import { h } from "preact";
import render from "preact-render-to-string";
import path from "path";

const axios = require("axios");

import pages from "./preact/pages/Index";
import htmlShell from "./templates/default";

const PORT = process.env.PORT || 8888;
const HOST = process.env.HOST || "localhost";
const apiUrl =
  process.env.NODE_ENV === "development"
    ? `http://${HOST}:${PORT}`
    : `https://${HOST}`;

const fastify = require("fastify");
const fastifyStatic = require("@fastify/static");

// FASTIFY CONFIG
const app = fastify({ logger: process.env.NODE_ENV === "development" });

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

// app.setNotFoundHandler((req, res) => {
//   if (!req.url.includes(".")) {
//     res.header("Content-Type", "text/html; charset=utf-8");
//     return htmlShell(
//       render(<NotFound title={"Страница не найдена"} />),
//       "Страница не найдена",
//     );
//   }
//   res.callNotFound();
// });

app.post("/sendRecall", (req, res) => {
  const { name, phone } = req.body;
  console.log(name, phone);

  axios
    .post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN || ""}/sendMessage`,
      {
        chat_id: process.env.BOT_CHAT_ID,
        text: `
        Запрос за обратный звонок!
        Имя: ${name}
        Телефон: ${phone}
      `,
        parse_mode: "HTML",
      },
    )
    .then((response) => {
      // console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  // fetch(
  //   `https://api.telegram.org/bot${process.env.BOT_TOKEN || ""}/sendMessage`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       chat_id: process.env.BOT_CHAT_ID,
  //       text: `
  //       Запрос за обратный звонок!
  //       ${name} ${phone}
  //       `,
  //       parse_mode: "HTML",
  //     }),
  //   },
  // )
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err));

  res.send(true);
});
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
