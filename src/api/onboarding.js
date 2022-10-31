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
};
