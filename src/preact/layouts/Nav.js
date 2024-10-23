// @ts-check
import { h, Fragment } from "preact";
import WhatsapSvg from "../components/nav/WhatsapSvg";
import CatalogBtn from "../components/nav/CatalogBtn";
import UserBtn from "../components/nav/UserBtn";
import CartBtn from "../components/nav/CartBtn";

const Nav = () => {
  return (
    <nav class="nav container">
      <div class="nav-top">
        <div class="nav-top__left">
          <a class="nav__link nav__link--space" href="/">
            Статьи
          </a>
          <a class="nav__link nav__link--space" href="/">
            Доставка
          </a>
          <a class="nav__link" href="/">
            Oплата
          </a>
        </div>
        <div class="nav-top__right">
          <a class="nav__link" href="/recall">
            Обратный звонок
          </a>
          <span class="nav-separator"></span>
          <a class="nav__phone" href="tel:+79001111111">
            +7-900-111-11-11
          </a>
          <span class="nav-separator"></span>
          <a href="https://wa.me/whatsappphonenumber">
            <WhatsapSvg width="20" height="20" class="nav__whatsap" />
          </a>
        </div>
      </div>
      <span class="nav__split"></span>
      <div class="nav-bottom">
        <div class="nav-bottom__left">
          <a href="/">
            <img
              width="172px"
              height="56px"
              class="nav__logo"
              src="/Logo.png"
              alt="Денежное дерево"
            />
          </a>
          <CatalogBtn />
        </div>
        <div class="nav-bottom__right">
          <CartBtn />
          <UserBtn />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
