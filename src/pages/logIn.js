import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
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

  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = () => {
    navigate(NonAuthRoutes.forgotPassword);
  };

  /** Handle to Login */
  const handleLogin = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);

    onboarding.Login(email, password).then((response) => {
      if (response.status === 200) {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        Cookies.set("accessToken", accessToken);
        localStorage.setItem("token", refreshToken);
      }
    });
  };

  const logInLargeScreen = () => {
    return (
      <div className="hidden md:block lg:block">
        <nav className="fixed">
          <Header />
        </nav>
        <div className="flex justify-center items-center">
          <div className="my-[71px] h-532px w-[609px] bg-white">
            <p className="mt-12 ml-60 font-Inter font-[700] text-4xl text-black">
              Log In
            </p>
            <form>
              <div className="mt-6 mx-20  w-[450]">
                <label className="" htmlFor="email">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Email
                  </p>
                  <input
                    id="log-email"
                    type="email"
                    placeholder="Email Address"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Password
                  </p>
                  <input
                    id="log-password"
                    type="password"
                    placeholder="Password"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
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

              <div className="mt-6 w-[450] text-right underline mr-20">
                <button
                  type="button"
                  title="Forgot password"
                  onClick={handleClick}
                >
                  Forgot password?
                </button>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <button
                  type="button"
                  title="submit"
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  onClick={handleLogin}
                >
                  Continue
                </button>
                <div className="mt-6 mx- w-[450] ">
                  <button
                    id="cancelButton-web"
                    type="submit"
                    onClick={() => navigate(NonAuthRoutes.landingPage)}
                    className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
                <div className="mt-6 mb-12 mx-20 w-[450] text-center">
                  Do not have an account?
                  <a href="/sign-up" className="text-[#16D176]">
                    Sign Up!
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  };

  const logInMobile = () => {
    return (
      <div className="md:hidden lg:hidden">
        <Header />
        <div className="flex justify-center items-center">
          <div className="h-[926px] w-[609px] bg-white">
            <p className="mt-12 ml-20 font-Inter font-[700] text-4xl text-black">
              Log In
            </p>
            <form>
              <div className="mt-6 mx-20  w-[450]">
                <label className="" htmlFor="email">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Email
                  </p>
                  <input
                    id="mobile-mail"
                    type="email"
                    placeholder="Email Address"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Password
                  </p>
                  <input
                    id="mobile-pass"
                    type="password"
                    placeholder="Password"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
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

              <div className="mt-6 w-[450] text-right underline mr-20">
                <button type="button" title="Forgot" onClick={handleClick}>
                  Forgot password
                </button>
              </div>
              <div className="mt-6 mx-20 w-[342] ">
                <button
                  type="button"
                  title="Continue"
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] active:bg-[#12AE62] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  onClick={handleLogin}
                >
                  Continue
                </button>
              </div>
              <div className="mt-6 mx-20 w-[342] ">
                <button
                  id="cancel-button-mobile"
                  type="submit"
                  onClick={() => navigate(NonAuthRoutes.landingPage)}
                  className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  Cancel
                </button>
                <div className="mt-6 mb-12 mx-20 w-[450] underline text-center">
                  <a href="/sign-up">Do not have an account? Sign Up!</a>
                </div>
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
