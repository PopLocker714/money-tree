// @ts-check
import { h, Fragment } from "preact";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main class="main container">{children}</main>
      <footer class="container">footer</footer>
    </>
  );
};

export default Layout;
