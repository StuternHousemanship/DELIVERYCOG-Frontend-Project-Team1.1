import React, { useState } from "react";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="hidden md:block lg:block">
        <div className="flex justify-center items-center">
          <div className="my-[71px] h-532px w-[609px] bg-white">
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
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Password
                  </p>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
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
                <a href=" ">Forgot password</a>
              </div>
              <div className="mt-6 mx-20 w-[450] ">
                <button
                  type="button"
                  title="Continue"
                  className="py-2 px-2 font-sans font-[600] bg-deliverycog-grey-background2-color text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  <a href="/dashboard">Continue</a>
                </button>
                <div className="mt-6 mb-12 mx-20 w-[450] underline text-center">
                  <a href="/sign-up">Do not have an account? Sign Up!</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="md:hidden lg:hidden">
        <div className="flex justify-center items-center">
          <div className="h-[926]px w-[609px] bg-white relative">
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
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Password
                  </p>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                  <span>
                    {showPassword ? (
                      <PasswordShow
                        className="absolute -mt-10 pr-2 ml-[420]"
                        onClick={() => handleShowPassword()}
                      />
                    ) : (
                      <PasswordHide
                        className="absolute -mt-10 pr-2 ml-[420]"
                        onClick={() => handleShowPassword()}
                      />
                    )}
                  </span>
                </label>
              </div>
              <div className="mt-6 w-[450] text-right underline mr-20">
                <a href=" ">Forgot password</a>
              </div>
              <div className="mt-6 mx-20 w-[450] ">
                <button
                  type="button"
                  title="Continue"
                  className="py-2 px-2 font-sans font-[600] bg-deliverycog-grey-background2-color text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  <a href="/dashboard">Continue</a>
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
