import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages";
import SignupPage from "../pages/signup";

const Chess = lazy(() => import("../pages/chess"));
const DavinciCode = lazy(() => import("../pages/davinciCode"));
const SiginPage = lazy(() => import("../pages/signin"));
const HalliGalli = lazy(() => import("../pages/halliGalli"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="/signin"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <SiginPage />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <SignupPage />
          </Suspense>
        }
      />
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
      <Route
        path="/halliGalli"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HalliGalli />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
