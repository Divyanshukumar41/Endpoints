import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import UserLayout from "../Layouts/userLayout/UserLayout";
import Home from "../Components/Pages/Home";
import { userRoutes } from "./routes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<UserLayout />}>
        {userRoutes.map((res) =>
          res.subLink.map((res1) => (
            <Route path={res1.path} element={res1.element} />
          )),
        )}
      </Route>
    </Routes>
  );
};

export default MainRoutes;
