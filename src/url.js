/** Authenticated URL Routes */
const AuthRoutes = {
  dashboard: "/dashboard",
  addTrip: "/add-trip",
  onboardingPage: "/onboarding-page",
  requestTrip: "/request-trip",
  viewAccount: "/account",
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
