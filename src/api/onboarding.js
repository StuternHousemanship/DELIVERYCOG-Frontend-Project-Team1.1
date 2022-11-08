/* eslint-disable import/no-cycle */
import { deliverycogOnboarding } from "../config";

export default {
  /** Send a POST request to Sign Up Users */
  async SignUp(firstName, lastName) {
    const data = {
      firstName,
      lastName,
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
};
