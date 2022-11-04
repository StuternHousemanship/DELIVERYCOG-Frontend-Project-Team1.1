/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signUp";
import LogIn from "./pages/logIn";

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="suspense-loading-icon" />
            <p className="text-center">Is Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path={AuthRoutes.dashboard} element={<dashboard />} />
          <Route path={NonAuthRoutes.landingPage} element={<LandingPage />} />
          <Route path={NonAuthRoutes.signUp} element={<SignUp />} />
          <Route exact path={NonAuthRoutes.logIn} element={<LogIn />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;
