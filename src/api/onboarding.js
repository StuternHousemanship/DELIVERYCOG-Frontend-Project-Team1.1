/* eslint-disable import/no-cycle */
// import Login from "pages/logIn";
import { deliverycogOnboarding } from "../config";

export default {
  /** Send a POST request to Sign Up Users */
  async SignUp(firstName, lastName, email, phoneNumber, password) {
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };
    const stringifiedData = JSON.stringify(data);

    return deliverycogOnboarding.post("/users/signUp", stringifiedData);
  },

  /** Send a POST request to Verify Email Account OTP Code for Users */
  async VerifyEmail(OtpCode) {
    const data = {
      OtpCode,
    };
    const stringifiedData = JSON.stringify(data);

    return deliverycogOnboarding.post("/Verify/OtpCode", stringifiedData);
  },

  /** Send a POST request to Login users */
  async Login(email, password) {
    const data = {
      email,
      password,
    };
    const stringifiedData = JSON.stringify(data);

    return deliverycogOnboarding.post("/users/login", stringifiedData);
  },
};
