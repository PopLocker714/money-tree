import { h } from "preact";
import Layout from "../layouts/Layout";

const NotFound = () => {
  return (
    <Layout navColour="lavender">
      <div class="flex-center">
        <h2>Старница не найдена :(</h2>
      </div>
    </Layout>
  );
};

const imgStyle = `
    max-width: 100%;
`;

export default NotFound;
