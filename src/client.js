import "../public/style/main.css";
import "../public/style/common.css";
import "../public/style/navigation.css";
import "../public/style/swiper.css";

import { hydrate } from "preact";
import Router from "./preact/components/Router.js";

hydrate(Router(), document.querySelector("#root"));
