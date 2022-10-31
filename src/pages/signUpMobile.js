/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
// import { NonAuthRoutes } from "../url";

function signUpMobile() {
  const [value, setValue] = useState();
  /** handles show Password text */
  const [showPassword, setShowPassword] = useState(false);
  /** handles navigating pages */
  // const navigate = useNavigate();
  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="h-926 w-[428px] bg-white">
          <p className="mt-12 ml-20 font-Inter font-[700] text-4xl text-black">
            Create account
          </p>
          <form>
            <div className="mt-10 mx-20 w-[348]">
              <label className="" htmlFor="firstName">
                <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                  First Name
                </p>
                <input
                  id="firstName"
                  type="firstName"
                  placeholder="Enter First Name"
                  className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                />
              </label>
            </div>
            <div className="mt-6 mx-20 w-[348]">
              <label className="" htmlFor="lastName">
                <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                  Last Name
                </p>
                <input
                  id="lastName"
                  type="lastName"
                  placeholder="Enter Last Name"
                  className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                />
              </label>
            </div>
            <div className="mt-6 mx-20 w-[348]">
              <label className="" htmlFor="email">
                <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                  Email
                </p>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                />
              </label>
            </div>
            <div className="mt-6 mx-20 w-[348]">
              <label className="" htmlFor="mobile">
                <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                  Mobile
                </p>
                <PhoneInput
                  id="mobile"
                  type="tel"
                  value={value}
                  onChange={setValue}
                  className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                />
              </label>
            </div>
            <div className="mt-6 mx-20 w-[348]">
              <label className="" htmlFor="password">
                <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                  Password
                </p>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                />
                <span className="absolute inset-y-[1667/100] mr-9">
                  {showPassword ? (
                    <PasswordShow
                      className="absolute mt-5 pr-2"
                      onClick={() => handleShowPassword()}
                    />
                  ) : (
                    <PasswordHide
                      className="absolute mt-5 pr-2"
                      onClick={() => handleShowPassword()}
                    />
                  )}
                </span>
              </label>
            </div>
            <div className="mt-6 mx-20 w-[348]">
              <label className="" htmlFor="re-enter password">
                <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                  Re-enter Password
                </p>
                <input
                  id="password"
                  type="password"
                  placeholder="Re-enter Password"
                  className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                />
                <span className="absolute inset-y-[1667/100] mr-9 ">
                  {showPassword ? (
                    <PasswordShow
                      className="mt-5 pr-2"
                      onClick={() => handleShowPassword()}
                    />
                  ) : (
                    <PasswordHide
                      className="mt-5 pr-2"
                      onClick={() => handleShowPassword()}
                    />
                  )}
                </span>
              </label>
            </div>
            <div className="mt-6 mx-20 w-[348] ">
              <input
                id="button"
                type="button"
                value="Continue"
                className="py-2 px-2 font-sans font-[600] bg-deliverycog-grey-background2-color text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
              />
              <div className="mt-6 mx-20 w-[348] text-center">
                <a href="/login">Log into an existing account</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signUpMobile;
