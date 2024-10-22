import { h } from "preact";

import Layout from "../layouts/Layout";
import Hero from "../sectons/Hero";
import { useEffect } from "preact/hooks";
import Categories from "../sectons/Categories";
import ProductSell from "../sectons/ProductSell";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <Layout navColour="palegreen">
      <Hero />
      <Categories />
      <ProductSell />
    </Layout>
  );
};

export default Home;
