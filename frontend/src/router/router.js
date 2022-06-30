import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "../admin";
import Layout from "../layout/DefaultLayout/index";
import DepthsListPage from "../pages/DepthsListPage";
import DoctorsListPage from "../pages/DoctorsListPage";
import ExaminationPackagesPage from "../pages/ExaminationPackagesPage";
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
          <Route path="DepthsListPage" element={<DepthsListPage />} />
          <Route path="FacilitiesPage" element={<FacilitiesPage />} />
          <Route path="DoctorsListPage" element={<DoctorsListPage />} />
          <Route
            path="ExaminationPackagesPage"
            element={<ExaminationPackagesPage />}
          />
          <Route path="ForDoctorsPage" element={<ForDoctorsPage />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="ForPatientsPage" element={<ForPatientsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
