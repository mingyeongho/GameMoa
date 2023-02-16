import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages";
import Signin from "../pages/signin";

const Chess = lazy(() => import("../pages/chess"));
const DavinciCode = lazy(() => import("../pages/davinciCode"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/chess"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Chess />
          </Suspense>
        }
      />
      <Route
        path="/davinciCode"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <DavinciCode />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
