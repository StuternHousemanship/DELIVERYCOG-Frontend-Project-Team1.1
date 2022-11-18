/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signUp";
import LogIn from "./pages/logIn";
import Dashboard from "./pages/dashboard";
import VerifyEmail from "./pages/emailVerificationPage";
import ResetPassword from "./pages/resetPassword";
import AccountRecovered from "./pages/accountRecovered";
import ForgotPassword from "./pages/forgotPassword";
import CreateAccountErrorLayout from "./createAccountErrorLayout";
import CreateAccountSuccessLayout from "./createAccountSuccessLayout";

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
          <Route path={AuthRoutes.dashboard} element={<Dashboard />} />
          <Route path={NonAuthRoutes.landingPage} element={<LandingPage />} />
          <Route path={NonAuthRoutes.signUp} element={<SignUp />} />
          <Route path={NonAuthRoutes.logIn} element={<LogIn />} />
          <Route
            path={NonAuthRoutes.emailVerificationPage}
            element={<VerifyEmail />}
          />
          <Route
            path={NonAuthRoutes.resetPassword}
            element={<ResetPassword />}
          />
          <Route
            path={NonAuthRoutes.accountRecovered}
            element={<AccountRecovered />}
          />
          <Route
            path={NonAuthRoutes.forgotPassword}
            element={<ForgotPassword />}
          />
          <Route
            path={NonAuthRoutes.createAccountErrorLayout}
            element={<CreateAccountErrorLayout />}
          />
          <Route
            path={NonAuthRoutes.createAccountSuccessLayout}
            element={<CreateAccountSuccessLayout />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;
