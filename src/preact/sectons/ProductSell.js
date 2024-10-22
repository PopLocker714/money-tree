import { h } from "preact";
import ProductItem from "../components/product/ProductItem";

const products = [
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-1.jpg",
    id: "123412323412",
    cost: 1000,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-2.jpg",
    id: "1298751283",
    cost: 2300,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-3.jpg",
    id: "123423029",
    cost: 2300,
    discount: 300,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-4.jpg",
    id: "88888888",
    cost: 2300,
    discount: 0,
  },
];

const ProductSell = () => {
  return (
    <section class="section">
      <h3 style={style.title}>Покупают чаще всего</h3>
      <div style={style.container}>
        {products.map((product) => {
          return <ProductItem {...product} />;
        })}
      </div>
    </section>
  );
};

const style = {
  title: `
    font-size: 32px;
    `,
  container: `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
};

export default ProductSell;
