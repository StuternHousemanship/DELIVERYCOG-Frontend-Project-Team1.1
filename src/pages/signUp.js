/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import onboarding from "../api/onboarding";
// import { NonAuthRoutes } from "../url";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  // const [value, setValue] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const navigate = useNavigate();

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

  return (
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
                    // value={value}
                    onChange={() => handleMobileNumber()}
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
              <div className="mt-6 mx-20 w-[450] ">
                <input
                  id="button"
                  type="button"
                  value="Continue"
                  onClick={() => handleSignUp()}
                  className="py-2 px-2 font-sans font-[600] bg-deliverycog-grey-background2-color text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                />
                <div className="mt-6 mx-20 w-[450] text-center">
                  <a href="/signUpMobile">Log into an existing account</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="md:hidden lg:hidden">
        <div className="flex justify-center items-center">
          <div className="h-914 w-[609px] bg-white">
            <p className="ml-20 font-Inter font-[700] text-4xl text-black">
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
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Mobile
                  </p>
                  <PhoneInput
                    id="mobile"
                    type="tel"
                    // value={value}
                    onChange={() => handleMobileNumber()}
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
              <div className="mt-6 mx-20 w-[450] ">
                <input
                  id="button"
                  type="button"
                  value="Continue"
                  className="py-2 px-2 font-sans font-[600] bg-deliverycog-grey-background2-color text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                />
                <div className="mt-6 mx-20 w-[450] text-center">
                  <a href="/signUpMobile">Log into an existing account</a>
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
