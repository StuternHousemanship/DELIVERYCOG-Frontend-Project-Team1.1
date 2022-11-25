import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import OnboardingFooter from "../footer";
import Header from "../header";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
// import { ReactComponent as DeliverycogLogo } from "../assets/svg/delivery-cog-logo.svg";
import { NonAuthRoutes } from "../url";
// eslint-disable-next-line import/no-cycle
import onboarding from "../api/onboarding";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [, /* buttonIsLoading */ setButtonIsLoading] = useState(false);

  // These clear the error when it reload
  useEffect(() => {
    if (email.length < 1) {
      setIsEmailValid(true);
    }
  });

  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /** handles Validate Email input */
  const validateEmail = (userEmail) => {
    setEmail(userEmail);
    // const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    const regex =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
    if (regex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };
  /** displays email error text */
  const displayEmailErrorText = () => {
    return (
      <p className="text-red-600 text-xs font-semibold mt-2">
        Please enter a valid email address
      </p>
    );
  };

  /** Handle to Login */
  const handleLogin = (e) => {
    e.preventDefault();
    setButtonIsLoading(true);
    try {
      onboarding.Login(email, password).then((response) => {
        if (response.status === 200) {
          const accessToken = response.access_token;
          const refreshToken = response.refresh_token;
          Cookies.set("accessToken", accessToken);
          localStorage.setItem("token", refreshToken);
          setButtonIsLoading(false);
          // navigate(NonAuthRoutes.LoginSuccessLayout);
        }
      });
    } catch (error) {
      setTimeout(() => {
        setButtonIsLoading(false);
      }, 5000);
      // navigate(NonAuthRoutes.LoginErrorLayout);
    }
  };

  const logInLargeScreen = () => {
    return (
      <div className="hidden md:block lg:block">
        <nav className="fixed w-full">
          <Header />
        </nav>
        <div className="flex justify-center items-center">
          <div className="my-[71px] h-532px w-[609px] bg-white">
            <p className="mt-12 ml-60 font-Inter font-[700] text-4xl text-black">
              Log in
            </p>
            <form onSubmit={() => handleLogin()}>
              <div className="mt-6 mx-20  w-[450]">
                <label className="" htmlFor="email">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Email
                  </p>
                  <input
                    id="log-email"
                    type="email"
                    placeholder="Enter your email address"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] appearance-none focus:outline-none"
                    onChange={(e) => validateEmail(e.target.value)}
                    onKeyUp={(e) => validateEmail(e.target.value)}
                  />
                </label>
                {isEmailValid ? null : displayEmailErrorText()}
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Password
                  </p>
                  <input
                    id="log-password"
                    type={showPassword ? "text" : "password"}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="Enter your password"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] appearance-none focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
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
              <div className="mt-3 mb-10 w-[450] text-right underline mr-20">
                <button
                  type="button"
                  title="Forgot password"
                  onClick={() => {
                    navigate(NonAuthRoutes.forgotPassword);
                  }}
                >
                  Forgot password
                </button>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <button
                  type="submit"
                  title="submit"
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#16D176] appearance-none focus:outline-none"
                  onClick={() => handleLogin()}
                >
                  Continue
                </button>
                <div className="mt-6 mx- w-[450] ">
                  <button
                    id="cancelButton-web"
                    type="submit"
                    onClick={() => navigate(NonAuthRoutes.landingPage)}
                    className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#16D176] appearance-none focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
                <button
                  id="signup-button"
                  type="submit"
                  onClick={() => {
                    navigate(NonAuthRoutes.signUp);
                  }}
                  className="mt-6 mb-10 mx-24 text-center"
                >
                  Do not have an account?
                  <span className="text-[#16D176]"> Sign up</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <OnboardingFooter />
        </div>
      </div>
    );
  };

  const logInMobile = () => {
    return (
      <div className="md:hidden lg:hidden w-[390px]">
        <nav className="fixed w-full">
          {" "}
          <Header />
        </nav>
        <div className="flex justify-center items-center">
          <div className="h-[716px] w-[390px] bg-white">
            <p className="mt-[120px] ml-6 font-Inter font-[700] text-2xl text-black">
              Log in
            </p>
            <form onSubmit={() => handleLogin()}>
              <div className="mt-6 mx-6 w-[342]">
                <label className="" htmlFor="email">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Email
                  </p>
                  <input
                    id="mobile-mail"
                    type="email"
                    placeholder="you@domain.com"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] appearance-none focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={(e) => validateEmail(e.target.value)}
                  />
                </label>
                {isEmailValid ? null : displayEmailErrorText()}
              </div>
              <div className="mt-6 mx-6 w-[342]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Password
                  </p>
                  <input
                    id="mobile-pass"
                    type={showPassword ? "text" : "password"}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="Your Password"
                    value={password}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] appearance-none focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
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

              <div className="mt-3 mb-10 w-[342] text-right text-sm underline mr-7">
                <button
                  type="button"
                  title="Forgot"
                  onClick={() => {
                    navigate(NonAuthRoutes.forgotPassword);
                  }}
                >
                  Forgot password
                </button>
              </div>
              <div className="mt-6 mx-6 w-[342] ">
                <button
                  type="submit"
                  title="Continue"
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] active:bg-[#12AE62] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#16D176] appearance-none focus:outline-none"
                  onClick={() => handleLogin()}
                >
                  Continue
                </button>
              </div>
              <div className="mt-6 mx-6 w-[342] ">
                <button
                  id="cancel-button-mobile"
                  type="submit"
                  onClick={() => navigate(NonAuthRoutes.logIn)}
                  className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#16D176] appearance-none focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  id="signup-mobile-button"
                  type="submit"
                  onClick={() => {
                    navigate(NonAuthRoutes.signUp);
                  }}
                  className="mt-6 mx-14  w-[342] text-center text-sm"
                >
                  Do not have an account?
                  <span className="text-[#16D176]"> Sign Up</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {logInLargeScreen()}
      {logInMobile()}
    </div>
  );
}
export default LogIn;
