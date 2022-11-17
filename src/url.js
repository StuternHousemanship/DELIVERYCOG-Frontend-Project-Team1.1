/** Authenticated URL Routes */
const AuthRoutes = {
  dashboard: "/dashboard",
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
  logOutErrorPage: "/log-out",
};

export { AuthRoutes, NonAuthRoutes };
