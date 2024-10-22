//import React from  'preact'
import { h } from "preact";
import { Router as PreactRouter } from "preact-router";

import pages from "../pages/Index";

const Router = () => {
  return (
    <PreactRouter>
      {pages.map((page) => {
        return <page.component path={page.route} title={page.title} />;
      })}
    </PreactRouter>
  );
};

export default Router;
