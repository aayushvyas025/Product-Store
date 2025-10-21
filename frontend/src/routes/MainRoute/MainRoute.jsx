import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const CreatePage = lazy(() => import("../../pages/Create/CreatePage"));
const HomePage = lazy(() => import("../../pages/Home/HomePage")); 
const NotFoundPage = lazy(() => import("../../pages/NotFound/NotFoundPage"))

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MainRoute;
