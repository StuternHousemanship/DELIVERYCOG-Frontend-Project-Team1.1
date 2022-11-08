/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import onboarding from "../api/onboarding";
import { NonAuthRoutes } from "../url";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrong, setPasswordStrong] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /** Function to handle password validation using the Validator package */
  const handlePasswordOnChange = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
      })
    ) {
      setPasswordStrong(true);
    } else {
      setPasswordStrong(false);
    }

    setPassword(value);
  };

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

    onboarding
      .SignUp(firstName, lastName, email, phoneNumber, password)
      .then((response) => {
        if (response.status === 200) {
          const accessToken = response.access_token;
          const refreshToken = response.refresh_token;
          Cookies.set("accessToken", accessToken);
          localStorage.setItem("token", refreshToken);
        }
      });
  };

  return (
    // large screen
    <div>
      <div className="hidden md:block lg:block">
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="email">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Email
                  </p>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Mobile
                  </p>
                  <PhoneInput
                    id="mobile"
                    type="tel"
                    value={phoneNumber}
                    onChange={() => handleMobileNumber()}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                    required
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
              {passwordStrong ? null : (
                <p className="text-rose-700 border border-rose-700 text-center rounded">
                  Not strong enough
                </p>
              )}
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="reEnterPassword">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Re-enter Password
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
              <div className="mt-6 mx-20 w-[450] ">
                <input
                  id="button"
                  type="button"
                  value="Continue"
                  onClick={() => handleSignUp()}
                  className="py-2 px-2 font-sans font-[600] bg-deliverycog-grey-background2-color text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                />
                <div className="mt-6 mx-20 w-[450] text-center">
                  <a href="/login">Log into an existing account</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      // small screeen
      <div className="md:hidden lg:hidden">
        <div className="flex justify-center items-center">
          <div className="h-926  w-[428px] bg-white">
            <p className="ml-20 font-Inter font-[700] text-4xl text-black">
              Create account
            </p>
            <form>
              <div className="mt-10 mx-20 w-[348]">
                <label className="" htmlFor="firstName-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    First Name
                  </p>
                  <input
                    id="firstName-mobile"
                    type="firstName-mobile"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[348]">
                <label className="" htmlFor="lastName-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Last Name
                  </p>
                  <input
                    id="lastName-mobile"
                    type="lastName-mobile"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[348]">
                <label className="" htmlFor="email-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Email
                  </p>
                  <input
                    id="email-mobile"
                    type="email-mobile"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    id="mobile2"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-20 w-[348]">
                <label className="" htmlFor="password-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Password
                  </p>
                  <input
                    id="password-mobile"
                    type="password-mobile"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => handlePasswordOnChange(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                  <span className="absolute inset-y-[1667/100] mr-9">
                    {showPassword ? (
                      <PasswordShow
                        className="absolute -mt-10 pr-2 ml-[318px]"
                        onClick={() => handleShowPassword()}
                      />
                    ) : (
                      <PasswordHide
                        className="absolute -mt-10 pr-2 ml-[318px]"
                        onClick={() => handleShowPassword()}
                      />
                    )}
                  </span>
                </label>
              </div>
              <div className="mt-6 mx-20 w-[348]">
                <label className="" htmlFor="reEnterPassword-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Re-enter Password
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
                        className="absolute -mt-10 pr-2 ml-[318px]"
                        onClick={() => handleShowPassword()}
                      />
                    ) : (
                      <PasswordHide
                        className="absolute -mt-10 pr-2 ml-[318px]"
                        onClick={() => handleShowPassword()}
                      />
                    )}
                  </span>
                </label>
              </div>
              <div className="mt-6 mx-20 w-[348] ">
                <button
                  id="button-mobile"
                  type="submit"
                  className="py-2 px-2 font-sans font-[600] bg-deliverycog-grey-background2-color text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  onClick={handleSignUp}
                >
                  Continue
                </button>
                <div className="mt-6 mx-20 w-[348] text-center sm:text-left">
                  onClick={() => navigate(NonAuthRoutes.login)}
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
