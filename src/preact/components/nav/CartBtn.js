import { h, Fragment } from "preact";

import CartSvg from "./CartSvg";

const CartBtn = () => {
  return (
    <a class="catalog-actions__cart" href="/catalog">
      <CartSvg class="catalog-actions__svg" />
    </a>
  );
};

export default CartBtn;
