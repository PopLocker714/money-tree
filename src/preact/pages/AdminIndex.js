import Login from "./Login";
import Dashboard from "./Dashboard";

export default [
  {
    route: "/login",
    component: Login,
    title: "Вход",
  },
  {
    route: "/dashboard",
    component: Dashboard,
    title: "Дашборд",
  },
];
