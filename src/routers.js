/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";

const SignUp = React.lazy(() => import("./pages/signUp"));
const LandingPage = React.lazy(() => import("./pages/landingPage"));
const LogIn = React.lazy(() => import("./pages/logIn"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const VerifyEmail = React.lazy(() => import("./pages/emailVerificationPage"));
const ResetPassword = React.lazy(() => import("./pages/resetPassword"));
const AccountRecovered = React.lazy(() => import("./pages/accountRecovered"));
const ForgotPassword = React.lazy(() => import("./pages/forgotPassword"));
const CreateAccountErrorLayout = React.lazy(() =>
  import("./components/errors/createAccountErrorLayout")
);
const CreateAccountSuccessLayout = React.lazy(() =>
  import("./components/success/createAccountSuccessLayout")
);
const LogOutErrorLayout = React.lazy(() =>
  import("./components/errors/logOutErrorLayout")
);
const LogOutSuccessLayout = React.lazy(() =>
  import("./components/success/logOutSuccessLayout")
);
const VerifyEmailSuccess = React.lazy(() =>
  import("./components/success/verifyEmailSuccessLayout")
);
const VerifyEmailFailure = React.lazy(() =>
  import("./components/errors/verifyEmailErrorLayout")
);
const ResetPasswordFailure = React.lazy(() =>
  import("./components/errors/resetPasswordErrorLayout")
);
const ResetPasswordSuccess = React.lazy(() =>
  import("./components/success/resetPasswordSuccessLayout")
);

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="suspense-loading-icon" />
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
          <Route
            path={NonAuthRoutes.logOutErrorLayout}
            element={<LogOutErrorLayout />}
          />
          <Route
            path={NonAuthRoutes.logOutSuccessLayout}
            element={<LogOutSuccessLayout />}
          />
          <Route
            path={NonAuthRoutes.verifyEmailSuccessLayout}
            element={<VerifyEmailSuccess />}
          />
          <Route
            path={NonAuthRoutes.verifyEmailErrorLayout}
            element={<VerifyEmailFailure />}
          />
          <Route
            path={NonAuthRoutes.resetPasswordErrorLayout}
            element={<ResetPasswordFailure />}
          />
          <Route
            path={NonAuthRoutes.resetPasswordSuccessLayout}
            element={<ResetPasswordSuccess />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;
