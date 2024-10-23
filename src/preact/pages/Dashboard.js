import { h } from "preact";
import Layout from "../layouts/Layout";

import { useEffect, useState } from "preact/hooks";

const Dashboard = ({ title }) => {
  useEffect(() => {
    document.title = title;
    console.log(title);
  });

  return (
    <Layout navColour="lavender">
      <h1 class="title-h2">dashboard</h1>
      <button onClick={(e) => console.log("click")} class="title-h2">
        dashboard
      </button>
    </Layout>
  );
};

export default Dashboard;
