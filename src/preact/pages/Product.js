import { h } from "preact";
import Layout from "../layouts/Layout";
import { useEffect } from "preact/hooks";

const Product = ({ uid, title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <Layout navColour="lavender">
      <h1>{uid}</h1>
    </Layout>
  );
};

export default Product;
