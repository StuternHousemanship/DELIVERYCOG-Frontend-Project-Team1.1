/* eslint-disable import/no-cycle */
// import Login from "pages/logIn";
import { deliverycogOnboarding } from "../config";

export default {
  /** Send a POST request to Sign Up Users */
  async SignUp(email, firstName, lastName, phoneNumber, password) {
    const data = {
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
    };
    const stringifiedData = JSON.stringify(data);

    return deliverycogOnboarding.post("/register", stringifiedData);
  },

  /** Send a POST request to Verify Email Account OTP Code for Users */
  async VerifyEmail(userId) {
    const data = {
      userId,
    };
    const stringifiedData = JSON.stringify(data);

    return deliverycogOnboarding.post("/account-activation", stringifiedData);
  },

  /** Send a POST request to Login users */
  async Login(email, password) {
    const data = {
      email,
      password,
    };
    const stringifiedData = JSON.stringify(data);

    return deliverycogOnboarding.post("/login", stringifiedData);
  },
};
