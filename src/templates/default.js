import packageJson from "../../package.json";

export default (html) => `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${packageJson.name}</title>
        <meta name="description" content="${packageJson.description}">
        <meta name="keywords" content="${packageJson.keywords.join(", ")}">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="/style/main.css">
        <link rel="stylesheet" href="/style/navigation.css">
        <link rel="stylesheet" href="/style/common.css">
        <link rel="stylesheet" href="/style/swiper.css">
    </head>
    <body>
        <div class="root" id="root">
            ${html}
        </div>
        <script type="module" src="/client.js" async></script>
    </body>
    </html>
`;
