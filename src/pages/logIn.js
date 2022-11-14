import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import { NonAuthRoutes } from "../url";
// eslint-disable-next-line import/no-cycle
import onboarding from "../api/onboarding";
import broCoronavirus from "../assets/Images/broCoronavirus.png";
import brodeliveryCog from "../assets/Images/brodeliveryCog.png";
import deliveryCogFrame from "../assets/Images/deliveryCogFrame.png";

function Login() {
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

    // eslint-disable-next-line no-undef
    onboarding.Login(email, password).then((response) => {
      if (response.status === 200) {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        Cookies.set("accessToken", accessToken);
        localStorage.setItem("token", refreshToken);
      }
    });
  };
  return (
    <div>
      <div className="hidden md:block lg:block bg-deliverycog-white-text-color">
        <img
          src={deliveryCogFrame}
          alt="deliveryCogFrame"
          className="absolute w-[331px] h-[55px] mt-[57px] ml-[108px]"
        />
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
                <button
                  type="button"
                  title="Cancel"
                  onClick={() => navigate(NonAuthRoutes.landingPage)}
                  className="mt-4 py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] text-base h-14 w-full border rounded border-[#16D176] appearance-none focus:outline-none"
                >
                  Cancel
                </button>
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
        <div className="flex justify-between">
          <img className="" src={broCoronavirus} alt="" />
          <img className="" src={brodeliveryCog} alt="" />
        </div>
      </div>

      <div className="md:hidden lg:hidden">
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
              <div className="mt-6 mx-20 w-[450] ">
                <button
                  type="button"
                  title="Continue"
                  className="py-2 px-2 font-sans font-[600] bg-deliverycog-grey-background2-color text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  onClick={handleLogin}
                >
                  Continue
                </button>
                <div className="mt-6 mb-12 mx-20 w-[450] underline text-center">
                  <a href="/sign-up">Do not have an account? Sign Up!</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
