import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import Header from "../components/header/header";
import { NonAuthRoutes } from "../url";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasEightCharacters, setHasEightCharacters] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [matchFirstPassword, setMatchFirstPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // clears error messages when page loads
  useEffect(() => {
    if (password.length < 1) {
      setIsPasswordValid(true);
    }
    if (confirmPassword.length < 1) {
      setMatchFirstPassword(true);
    }
  });

  useEffect(() => {
    // confirms all criterias of password are met
    if (
      hasLowerCase &&
      hasUpperCase &&
      hasEightCharacters &&
      (hasNumber || hasSymbol)
    ) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
    // checks for lowercase in password
    if (/[a-z]/.test(password)) {
      setHasLowerCase(true);
    } else {
      setHasLowerCase(false);
    }
    // checks for uppercase in password
    if (/[A-Z]/.test(password)) {
      setHasUpperCase(true);
    } else {
      setHasUpperCase(false);
    }
    // checks length is up to 8
    if (password.length >= 8) {
      setHasEightCharacters(true);
    } else {
      setHasEightCharacters(false);
    }
    // checks for number in password
    if (/\d/.test(password)) {
      setHasNumber(true);
    } else {
      setHasNumber(false);
    }
    // checks for symbol in password
    const regex = /[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;
    if (regex.test(password)) {
      setHasSymbol(true);
    } else {
      setHasSymbol(false);
    }
  }, [password]);
  /** handles show Confirm Password text */
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const displayPasswordCriteria = () => {
    return (
      <div className="">
        <p
          className={
            hasUpperCase && hasLowerCase
              ? "text-green-600 text-xs font-semibold mx-2"
              : "text-red-600 text-xs font-semibold mx-2"
          }
        >
          *Must include one uppercase and one lowercase
        </p>
        <p
          className={
            hasEightCharacters
              ? "text-green-600 text-xs font-semibold mx-2"
              : "text-red-600 text-xs font-semibold mx-2"
          }
        >
          *Contain at least 8 characters
        </p>
        <p
          className={
            hasNumber || hasSymbol
              ? "text-green-600 text-xs font-semibold mx-2"
              : "text-red-600 text-xs font-semibold mx-2"
          }
        >
          *Contain a number or symbol
        </p>
      </div>
    );
  };

  /** displays confirm password error text */
  const displayConfirmPasswordErrorText = () => {
    return (
      <p
        className={
          matchFirstPassword
            ? "text-green-600 text-xs font-semibold mx-2"
            : "text-red-600 text-xs font-semibold mx-2"
        }
      >
        *Must match first password
      </p>
    );
  };

  /** Desktop and Tablet Screen Layout */
  const displayResetPasswordLargeScreen = () => {
    return (
      <div className="hidden md:block lg:block">
        <nav className="fixed w-full">
          <Header />
        </nav>
        <div className="flex justify-center items-center">
          <div className="my-[88px] h-[490px] w-[609px] bg-white">
            <p className="mt-12 font-Inter font-[700] text-3xl text-black text-center">
              Reset Password
            </p>
            <p className="text-center font-sans font-[500] text-[#898989] mt-[24px]">
              Kindly set your new password.
            </p>
            <form>
              <div className="mt-6 mx-20  w-[450]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Password
                  </p>
                  <input
                    id="lostpass"
                    type={showPassword ? "text" : "password"}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder=" enter new password"
                    onChange={(e) => setPassword(e.target.value)}
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
                {isPasswordValid ? null : displayPasswordCriteria()}
              </div>

              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Re-enter Password
                  </p>
                  <input
                    id="repass"
                    type={showConfirmPassword ? "text" : "password"}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="re-enter paassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
                  />
                  <span>
                    {showConfirmPassword ? (
                      <PasswordShow
                        className="absolute -mt-10 pr-2 ml-[420px]"
                        onClick={() => handleShowConfirmPassword()}
                      />
                    ) : (
                      <PasswordHide
                        className="absolute -mt-10 pr-2 ml-[420px]"
                        onClick={() => handleShowConfirmPassword()}
                      />
                    )}
                  </span>
                </label>
              </div>
              {matchFirstPassword ? null : displayConfirmPasswordErrorText()}
              <p className=" mt-2 mx-20 font-sans font-[600] text-blue-700 text-xs">
                Must include uppercase letters (A-Z), lowercase letters (a-z)
                and number (0-9)
              </p>
              <div className="mt-6 mx-20 w-[450] ">
                <button
                  type="button"
                  title="Continue"
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  <a href=" ">Continue</a>
                </button>
              </div>
              <div className="mt-6 mx-20 w-[450] ">
                <button
                  type="button"
                  title="Cancel"
                  onClick={() => {
                    Navigate(NonAuthRoutes.logIn);
                  }}
                  className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  /** Mobile Screen Layout */
  const displayResetPasswordMobileScreen = () => {
    return (
      <div className="md:block lg:hidden w-[390px]">
        <Header />
        <div className="flex justify-center items-center">
          <div className="my-[71px] h-[490px] w-[609px] bg-white">
            <p className="mt-12 font-Inter font-[700] text-4xl text-black text-center">
              Reset Password
            </p>
            <p className="text-center font-sans font-[500] text-[#898989] mt-[24px]">
              Kindly set your new password.
            </p>
            <form>
              <div className="mt-6 mx-20  w-[450]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    password
                  </p>
                  <input
                    id="lostpassMobile"
                    type={showPassword ? "text" : "password"}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="new password"
                    onChange={(e) => setPassword(e.target.value)}
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
                {isPasswordValid ? null : displayPasswordCriteria()}
              </div>

              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="password">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Re-enter Password
                  </p>
                  <input
                    id="repassMobile"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
              {matchFirstPassword ? null : displayConfirmPasswordErrorText()}
              <div className="mt-6 mx-20 w-[450] ">
                <button
                  type="button"
                  title="Continue"
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  <a href=" ">Continue</a>
                </button>
              </div>
              <div className="mt-6 mx-20 w-[450] ">
                <button
                  type="button"
                  title="Cancel"
                  onClick={() => {
                    Navigate(NonAuthRoutes.logIn);
                  }}
                  className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  Cancel
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
      {displayResetPasswordLargeScreen()}
      {displayResetPasswordMobileScreen()}
    </div>
  );
}
export default ResetPassword;
