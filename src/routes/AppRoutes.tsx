import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "../components/home/Home";
import { ROUTE_COMPONENTS } from "./constant";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:app" element={<MultiLang />} /> */}
        {Object.entries(ROUTE_COMPONENTS).map(([path, Component]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
};

export default AppRoutes;
