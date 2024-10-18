import { h, Fragment } from "preact";

import CatalogSvg from "./CatalogSvg";

const CatalogBtn = () => {
  return (
    <a class="catalog-btn" href="/catalog">
      <CatalogSvg class="catalog-btn__svg" />
      <span class="catalog-btn__text">Каталог</span>
    </a>
  );
};

export default CatalogBtn;
