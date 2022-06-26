import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layout/DefaultLayout/index";
import DoctorsListPage from "../pages/DoctorsListPage";
import FacilitiesPage from "../pages/FacilitiesPage/FacilitiesPage";
import ForDoctorsPage from "../pages/ForDoctorPage/index";
import ForPatientsPage from "../pages/ForPatientsPage/index";
import Home from "../pages/Home/index";
import NotFound from "../pages/NotFoundPage/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="FacilitiesPage" element={<FacilitiesPage />} />
          <Route path="DoctorsListPage" element={<DoctorsListPage />} />
          <Route path="ForDoctorsPage" element={<ForDoctorsPage />} />
          <Route path="ForPatientsPage" element={<ForPatientsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
