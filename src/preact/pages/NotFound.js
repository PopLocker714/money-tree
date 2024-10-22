import { h } from "preact";
import Layout from "../layouts/Layout";
import { useEffect } from "preact/hooks";

const NotFound = (title) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <Layout navColour="lavender">
      <div class="flex-center">
        <h2>Старница не найдена :(</h2>
      </div>
    </Layout>
  );
};

export default NotFound;
