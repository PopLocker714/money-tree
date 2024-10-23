import Home from "./Home";
import About from "./About";
import Catalog from "./Catalog";
import Product from "./Product";
import Recall from "./Recall";

export default [
  {
    route: "/",
    component: Home,
    title: "Денежное дерево",
  },
  {
    route: "/about",
    component: About,
    title: "О нас",
  },
  {
    route: "/catalog",
    component: Catalog,
    title: "Каталог",
  },
  {
    route: "/product/:uid",
    component: Product,
    title: "Product name",
  },
  {
    route: "/recall",
    component: Recall,
    title: "Обратный звонок",
  },
];
