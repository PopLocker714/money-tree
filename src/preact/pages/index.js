import Home from "./Home";
import About from "./About";
import Catalog from "./Catalog";
import NotFound from "./NotFound";
import Product from "./Product";

export default [
  {
    route: "/",
    component: Home,
  },
  {
    route: "/about",
    component: About,
  },
  {
    route: "/catalog",
    component: Catalog,
  },
  {
    route: "/product/:uid",
    component: Product,
  },
  {
    route: "/:uid",
    component: NotFound,
  },
];
