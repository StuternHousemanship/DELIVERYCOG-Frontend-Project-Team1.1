/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import { ReactComponent as DeliverycogLogo } from "../assets/svg/delivery-cog-logo.svg";
import { ReactComponent as DeliverycogLogoMobile } from "../assets/svg/delivery-cog-logo-mobile.svg";
import FooterImage1 from "../assets/Images/broCoronavirus.png";
import FooterImage2 from "../assets/Images/brodeliveryCog.png";
import onboarding from "../api/onboarding";
import { NonAuthRoutes } from "../url";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // const [value, setValue] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Sign Up • Deliverycog";

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /** Validates Users Mobile Number */
  const handleMobileNumber = () => {
    //
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);

    onboarding.SignUp(firstName, lastName).then((response) => {
      if (response.status === 200) {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        Cookies.set("accessToken", accessToken);
        localStorage.setItem("token", refreshToken);
      }
    });
  };

  /** Displays Sign Up Large Screen Layout */
  const signUpLargeScreenLayout = () => {
    return (
      <div className="hidden md:block lg:block">
        <DeliverycogLogo className="ml-[120px] mt-[60px]" />
        <div className="flex justify-center">
          <div className="my-[71px] h-914 w-[609px] bg-white">
            <p className="mt-12 ml-20 font-Inter font-[700] text-4xl text-black">
              Sign up with us
            </p>
            <form>
              <div className="mt-10 mx-20 w-[450]">
                <label className="" htmlFor="firstName">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    First name
                  </p>
                  <input
                    id="firstName"
                    type="firstName"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="lastName">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Last name
                  </p>
                  <input
                    id="lastName"
                    type="lastName"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="email">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Email
                  </p>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={() => handleSignUp()}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Phone number
                  </p>
                  <PhoneInput
                    id="mobile"
                    type="tel"
                    // value={value}
                    onChange={() => handleMobileNumber()}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400]  text-black">
                    Password
                  </p>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
                  />
                  <span>
                    {showPassword ? (
                      <PasswordShow
                        className="absolute -mt-10 pr-2 ml-[420px]"
                        onClick={() => handleShowPassword()}
                      />
                    ) : (
                      <PasswordHide
                        className="absolute -mt-10 pr-2 ml-[420px]"
                        onClick={() => handleShowPassword()}
                      />
                    )}
                  </span>
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="reEnterPassword">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Confirm password
                  </p>
                  <input
                    id="reEnterPassword"
                    type="password"
                    placeholder="Re-enter Password"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
                  />
                  <span>
                    {showPassword ? (
                      <PasswordShow
                        className="-mt-10 pr-2 ml-[420px]"
                        onClick={() => handleShowPassword()}
                      />
                    ) : (
                      <PasswordHide
                        className="-mt-10 pr-2 ml-[420px]"
                        onClick={() => handleShowPassword()}
                      />
                    )}
                  </span>
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450] bg-[#FFFFFF]">
                <button
                  id="createAccount-button"
                  type="submit"
                  onClick={() => navigate(NonAuthRoutes.accountSuccess)}
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] active:bg-[#12AE62] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  Create account
                </button>
                <button
                  id="cancel-button"
                  type="submit"
                  onClick={() => navigate(NonAuthRoutes.landingPage)}
                  className="mt-4 py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  Cancel
                </button>
                <div className="mt-6 mx-20 w-[full] text-center">
                  <a href="/login">
                    Already have an account?{" "}
                    <span className="text-[#16D176]"> Sign in</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-between">
          <img src={FooterImage1} alt="footerImage1" />
          <img src={FooterImage2} alt="footerImage2" />
          {/* <CitroneBgDown className="citrone-bg fixed  bottom-0 left-0" />
  const header = () => {
    return (
      <div className="sticky top-0 z-50 citrone-background-color-css">
        <div className="border-b-2 border-gray-100 pb-4 pt-4 text-center ">
          <button type="button" onClick={handleLandingPageRoute}>
            <CitroneLogo className="" />
          </button>
        </div>
      </div>
    );
  }; */}
        </div>
      </div>
    );
  };

  return (
    // large screen
    <div>
      {signUpLargeScreenLayout()}
      {/* Small Screen */}
      <div className="md:hidden lg:hidden h-[976px]  w-[390px]">
        <DeliverycogLogoMobile className="ml-6 mt-[46px]" />
        <div className="flex justify-center items-center">
          <div className="h-[696px]  w-[342px] bg-white">
            <p className="ml-6 mt-6 font-Inter font-[700] text-2xl text-black">
              Create account
            </p>
            <form>
              <div className="mt-6 mx-6 w-[342]">
                <label className="" htmlFor="firstName-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    First name
                  </p>
                  <input
                    id="firstName-mobile"
                    type="firstName-mobile"
                    placeholder="Enter First Name"
                    value={firstName}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-6 w-[342]">
                <label className="" htmlFor="lastName-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Last name
                  </p>
                  <input
                    id="lastName-mobile"
                    type="lastName-mobile"
                    placeholder="Enter Last Name"
                    value={lastName}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-6 w-[342]">
                <label className="" htmlFor="email-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Email
                  </p>
                  <input
                    id="email-mobile"
                    type="email-mobile"
                    placeholder="Enter Your Email"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-6 w-[342]">
                <label className="" htmlFor="mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Phone number
                  </p>
                  <PhoneInput
                    id="mobile2"
                    type="tel"
                    // value={value}
                    onChange={() => handleMobileNumber()}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-6 w-[342]">
                <label className="" htmlFor="password-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Password
                  </p>
                  <input
                    id="password-mobile"
                    type="password-mobile"
                    placeholder="Enter Password"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                  <span className="absolute inset-y-[1667/100] mr-9">
                    {showPassword ? (
                      <PasswordShow
                        className="absolute -ml-7 pr-2 mt-4"
                        onClick={() => handleShowPassword()}
                      />
                    ) : (
                      <PasswordHide
                        className="absolute -ml-7 pr-2 mt-4"
                        onClick={() => handleShowPassword()}
                      />
                    )}
                  </span>
                </label>
              </div>
              <div className="mt-6 mx-6 w-[342]">
                <label className="" htmlFor="reEnterPassword-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Confirm password
                  </p>
                  <input
                    id="reEnterPassword-mobile"
                    type="password-mobile"
                    placeholder="Re-enter Password"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                  <span className="absolute inset-y-[1667/100] mr-9 ">
                    {showPassword ? (
                      <PasswordShow
                        className="absolute  -ml-7 pr-2 mt-4"
                        onClick={() => handleShowPassword()}
                      />
                    ) : (
                      <PasswordHide
                        className="absolute  -ml-7 pr-2 mt-4"
                        onClick={() => handleShowPassword()}
                      />
                    )}
                  </span>
                </label>
              </div>
              <div className="mt-6 mx-6 w-[342] ">
                <button
                  id="createAccount-button-mobile"
                  type="submit"
                  onClick={() => navigate(NonAuthRoutes.accountSuccess)}
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] active:bg-[#12AE62] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  Create account
                </button>
              </div>
              <div className="mt-6 mx-6 w-[342] ">
                <button
                  id="cancel-button-mobile"
                  type="submit"
                  onClick={() => navigate(NonAuthRoutes.landingPage)}
                  className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  Cancel
                </button>
                <div className="mt-6 mx-6 w-[342] text-center text-sm">
                  <a href="/login">Already have an account? sign in</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
