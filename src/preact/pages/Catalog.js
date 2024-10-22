import { h } from "preact";
import Layout from "../layouts/Layout";

import { useEffect } from "preact/hooks";
import ProductItem from "../components/product/ProductItem";

const products = [
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-1.jpg",
    id: "1",
    cost: 1000,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-2.jpg",
    id: "2",
    cost: 2300,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-3.jpg",
    id: "3",
    cost: 2300,
    discount: 300,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-4.jpg",
    id: "4",
    cost: 2300,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-1.jpg",
    id: "5",
    cost: 1000,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-2.jpg",
    id: "6",
    cost: 2300,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-3.jpg",
    id: "7",
    cost: 2300,
    discount: 300,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-4.jpg",
    id: "8",
    cost: 2300,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-1.jpg",
    id: "9",
    cost: 1000,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-2.jpg",
    id: "10",
    cost: 2300,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-3.jpg",
    id: "11",
    cost: 2300,
    discount: 300,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-4.jpg",
    id: "12",
    cost: 2300,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-1.jpg",
    id: "13",
    cost: 1000,
    discount: 1000,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-2.jpg",
    id: "14",
    cost: 2300,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-3.jpg",
    id: "15",
    cost: 2300,
    discount: 300,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-4.jpg",
    id: "16",
    cost: 2300,
    discount: 0,
  },
];

const Catalog = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <Layout navColour="lavender">
      <div style={style.container}>
        {products.map((product) => {
          return <ProductItem {...product} />;
        })}
      </div>
    </Layout>
  );
};

const style = {
  container: `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
};
export default Catalog;
