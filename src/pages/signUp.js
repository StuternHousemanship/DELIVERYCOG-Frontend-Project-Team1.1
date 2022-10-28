import React, { useState } from "react";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="my-[71px] h-914 w-[609px] bg-white">
          <p className="mt-12 ml-20 font-Inter font-[700] text-4xl text-black">
            Create account
          </p>
          <form>
            <div className="mt-10 mx-20 w-[450]">
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
            <div className="mt-6 mx-20 w-[450]">
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
            <div className="mt-6 mx-20 w-[450]">
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
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
