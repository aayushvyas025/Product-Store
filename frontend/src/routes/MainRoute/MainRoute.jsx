import { Route, Routes } from "react-router-dom";
import { CreatePage, HomePage, NotFoundPage } from "../../pages";

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
