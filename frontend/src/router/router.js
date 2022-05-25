import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Layout from "../layout/DefaultLayout";
import ForDoctorsPage from "../Pages/ForDoctorPage";
import ForPatientsPage from "../Pages/ForPatientsPage";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFoundPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ForDoctorsPage" element={<ForDoctorsPage />} />
          <Route path="ForPatientsPage" element={<ForPatientsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
