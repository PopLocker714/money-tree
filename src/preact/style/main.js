const main = `
  :root {
      --color-primary: #235ad1;
      --color-black: #000000;
      --color-text: #1e1e1e;
      --color-gray: #83879d;
      --color-gray-light: #d1dee3;
      --color-green: #44bc1e;
      --font-size-nav: 18px;
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  html,
  body {
      height: 100%;
      width: 100%;
      margin: 0;
      color: #1e1e1eee;
      line-height: 1;
      font-family: "Montserrat", sans-serif;
      font-optical-sizing: auto;
      font-style: normal;
  }

  a,
  a:link,
  a:visited {
      text-decoration: none;
  }

  a:hover {
      text-decoration: none;
  }

  aside,
  nav,
  footer,
  header,
  section,
  main {
      display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
  }

  p {
      margin: 0;
  }
  `;

const common = `

  .root {
      min-height: 100%;
      display: flex;
      flex-direction: column;
  }

  .main {
      flex: 1 1 auto;
  }

  .flex-center {
  }

  .container {
      max-width: 1135px;
      margin: 0 auto;
      width: 100%;
  }

  .section {
      padding: 16px 0;
  }

  .title-h2 {
      font-size: 32px;
  }

  .input {
      background-color: #f1f6f8;
      border-radius: 16px;
      padding: 16px 24px;
      font-size: 16px;
      border: none;
      margin-bottom: 16px;
  }

  .input-label {
      margin-bottom: 10px;
  }
  `;

const nav = `

  .nav {
      width: 100%;
      padding: 1rem 0;
  }

  .nav__split {
      display: block;
      height: 1px;
      width: 100%;
      background-color: #f1f6f8;
      margin: 10px 0;
      /* border-bottom: 1px; */
  }

  .nav__link {
      color: var(--color-gray);
      font-size: var(--font-size-nav);
  }

  .nav__link--space {
      margin-right: 32px;
  }

  .nav__phone {
      color: var(--color-green);
      font-size: var(--font-size-nav);
  }

  .nav__whatsap {
      /* width: 10px; */
      color: var(--color-green);
  }

  .nav-separator {
      display: block;
      background-color: var(--color-gray-light);
      width: 1px;
      height: 1rem;
      margin-left: 16px;
      margin-right: 16px;
  }

  .nav-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .nav-top__left {
  }

  .nav-top__right {
      display: flex;
      align-items: center;
  }

  .nav-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 0;
  }

  .nav-bottom__left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 328px;
  }

  .catalog-btn {
      display: flex;
      align-items: center;
  }

  .catalog-btn__text {
      color: var(--color-green);
      font-size: 18px;
      margin-left: 12px;
  }

  .catalog-btn__svg {
      color: var(--color-green);
  }

  .catalog-actions__svg {
      color: var(--color-gray);
  }

  .catalog-actions__cart {
      margin-right: 32px;
  }
  `;

export { main, common, nav };
