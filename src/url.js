/** Authenticated URL Routes */
const AuthRoutes = {
  dashboard: "/dashboard",
  addTrip: "/addTrip",
  onboardingPage: "/onboardingPage",
  requestTrip: "/request-trip",
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
};

export { AuthRoutes, NonAuthRoutes };
