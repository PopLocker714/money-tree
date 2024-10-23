import packageJson from "../../package.json";
import { common, main, nav } from "../preact/style/main";
import swiper from "../preact/style/swiper";

export default (html, title, apiUrl) => `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <title>${title}</title>
        <meta name="description" content="${packageJson.description}">
        <meta name="keywords" content="${packageJson.keywords.join(", ")}">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <script>window.__apiUrl = "${apiUrl}"</script>
        <style>
          ${main}
          ${common}
          ${nav}
        </style>
    </head>
    <body>
        <div class="root" id="root">
            ${html}
        </div>
        <script type="module" src="/client.js" async></script>
    </body>
    </html>
`;
