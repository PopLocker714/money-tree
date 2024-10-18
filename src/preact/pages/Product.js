import { h } from "preact";
import Layout from "../layouts/Layout";

const Product = ({ uid }) => {
  return (
    <Layout navColour="lavender">
      <h1>{uid}</h1>
    </Layout>
  );
};

export default Product;
