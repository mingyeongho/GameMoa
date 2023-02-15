import { Route, Routes } from "react-router-dom";
import Index from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default Router;
