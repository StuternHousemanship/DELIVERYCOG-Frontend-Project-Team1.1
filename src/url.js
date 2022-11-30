/** Authenticated URL Routes */
const AuthRoutes = {
  dashboard: "/dashboard",
  addTrip: "/addTrip",
};

/** Non Authenticated URL Routes */
const NonAuthRoutes = {
  landingPage: "/",
  signUp: "/sign-up",
  logIn: "/login",
  resetPassword: "/resetpassword",
  accountRecovered: "/account-recovered",
  forgotPassword: "/forgot-password",
  emailVerificationPage: "/verify-email",
  // createAccountErrorLayout: "/create-account-error-layout",
  // createAccountSuccessLayout: "/create-account-success-layout",
  // logOutErrorLayout: "/logout-error",
  // logOutSuccessLayout: "/logout-success",
  // verifyEmailSuccessLayout: "/email-verification-success",
  // verifyEmailErrorLayout: "/email-verification-failed",
  // resetPasswordErrorLayout: "/reset-password-failed",
  // resetPasswordSuccessLayout: "/reset-password-success",
};

export { AuthRoutes, NonAuthRoutes };
