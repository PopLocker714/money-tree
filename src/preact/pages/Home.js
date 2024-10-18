import { h } from "preact";

import Layout from "../layouts/Layout";
import Hero from "../sectons/Hero";

const Home = () => {
  return (
    <Layout navColour="palegreen">
      <Hero />
    </Layout>
  );
};

export default Home;
