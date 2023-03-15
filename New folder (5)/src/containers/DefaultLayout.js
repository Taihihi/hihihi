// import React, { useState, useEffect, Fragment } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";
import Header from "./Header";
// import Home from "../pages/Home";
// import Major from "../pages/Major";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="major" element={<Major />} /> */}
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
};

export default DefaultLayout;
