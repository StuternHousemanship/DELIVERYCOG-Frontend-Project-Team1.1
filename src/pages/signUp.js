/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Header from "../header";
import OnboardingFooter from "../footer";
import AccountError from "../components/errors/createAccountErrorLayout";
// import SuccessAccount from "../components/success/createAccountSuccessLayout";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import { ReactComponent as LoadingButton } from "../assets/svg/loading-icon.svg";
import onboarding from "../api/onboarding";
import { NonAuthRoutes } from "../url";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [personalDataPageFilled, setPersonalDataPageFilled] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasEightCharacters, setHasEightCharacters] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [matchFirstPassword, setMatchFirstPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // const [isCreateAccountSuccessful, setIsCreateAccountSuccessful] =
  //   useState(false);

  // const handleCreateAccount = () => {
  //   setIsCreateAccountSuccessful(true);
  //   navigate(NonAuthRoutes.emailVerificationPage);
  // };

  useEffect(() => {
    // These logic clear error messages when page loads
    if (email.length < 1) {
      setIsEmailValid(true);
    }
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
    /** checks for lowercase in password */
    if (/[a-z]/.test(password)) {
      setHasLowerCase(true);
    } else {
      setHasLowerCase(false);
    }
    /** checks for uppercase in password */
    if (/[A-Z]/.test(password)) {
      setHasUpperCase(true);
    } else {
      setHasUpperCase(false);
    }
    /** checks length is up to 8 */
    if (password.length >= 8) {
      setHasEightCharacters(true);
    } else {
      setHasEightCharacters(false);
    }
    /** checks for number in password */
    if (/\d/.test(password)) {
      setHasNumber(true);
    } else {
      setHasNumber(false);
    }
    /** checks for symbol in password */
    const regex = /[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;
    if (regex.test(password)) {
      setHasSymbol(true);
    } else {
      setHasSymbol(false);
    }
  }, [password]);

  useEffect(() => {
    // checks that second password matches first
    if (password === confirmPassword) {
      setMatchFirstPassword(true);
    } else {
      setMatchFirstPassword(false);
    }
  }, [confirmPassword]);

  /** handles Validate Email input */
  const validateEmail = (userEmail) => {
    setEmail(userEmail);
    const regex = /^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    if (regex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
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
  /** handles show Confirm Password text */
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  /** Validates Users Mobile Number */
  const handleMobileNumber = (userPhoneNumber) => {
    setPhoneNumber(userPhoneNumber);
  };

  /** Handles The Sign Up Button */
  const handleSignUp = async (e) => {
    e.preventDefault();
    setButtonIsLoading(true);
    // console.log(
    //   "handleSignUp Data",
    //   email,
    //   firstName,
    //   lastName,
    //   phoneNumber,
    //   password
    // );
    try {
      await onboarding
        .SignUp(email, firstName, lastName, phoneNumber, password)
        .then((response) => {
          if (response.status === 200) {
            // setButtonIsLoading(false);
            // console.log("handleSignUp response", response);
            navigate(NonAuthRoutes.emailVerificationPage);
          }
        });
    } catch (error) {
      setButtonIsLoading(false);
      // console.error("handleSignUp Error", error);
      <AccountError />;
    }
  };

  /** displays email error text */
  const displayEmailErrorText = () => {
    return (
      <p className="text-red-600 text-xs font-semibold mb-6 mt-[6px] mx-20">
        Please enter a valid email address
      </p>
    );
  };
  /** displays email error text mobile */
  const displayEmailErrorTextMobile = () => {
    return (
      <p className="text-red-600 text-xs font-semibold mb-6 mt-[6px] mx-8">
        Please enter a valid email address
      </p>
    );
  };

  /** displays password criteria texts */
  const displayPasswordCriteria = () => {
    return (
      <div className="ml-4 mb-4 mt-[6px]  mx-20">
        <p
          className={
            hasUpperCase && hasLowerCase
              ? "text-green-600 text-xs font-semibold mx-16"
              : "text-red-600 text-xs font-semibold mx-16"
          }
        >
          *Must include one uppercase and one lowercase
        </p>
        <p
          className={
            hasEightCharacters
              ? "text-green-600 text-xs font-semibold mx-16"
              : "text-red-600 text-xs font-semibold mx-16"
          }
        >
          *Contain at least 8 characters
        </p>
        <p
          className={
            hasNumber || hasSymbol
              ? "text-green-600 text-xs font-semibold mx-16"
              : "text-red-600 text-xs font-semibold mx-16"
          }
        >
          *Contain a number or symbol
        </p>
      </div>
    );
  };
  /** displays password criteria texts mobile */
  const displayPasswordCriteriaMobile = () => {
    return (
      <div className="ml-4 mb-4 mt-[6px]  mx-6">
        <p
          className={
            hasUpperCase && hasLowerCase
              ? "text-green-600 text-xs font-semibold mx-4"
              : "text-red-600 text-xs font-semibold mx-4"
          }
        >
          *Must include one uppercase and one lowercase
        </p>
        <p
          className={
            hasEightCharacters
              ? "text-green-600 text-xs font-semibold mx-4"
              : "text-red-600 text-xs font-semibold mx-4"
          }
        >
          *Contain at least 8 characters
        </p>
        <p
          className={
            hasNumber || hasSymbol
              ? "text-green-600 text-xs font-semibold mx-4"
              : "text-red-600 text-xs font-semibold mx-4"
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
            ? "text-green-600 text-xs font-semibold mb-6 mt-[22px] ml-20 "
            : "text-red-600 text-xs font-semibold mb-6 mt-[22px] ml-20 "
        }
      >
        *Must match first password
      </p>
    );
  };
  /** displays confirm password error text mobile */
  const displayConfirmPasswordErrorTextMobile = () => {
    return (
      <p
        className={
          matchFirstPassword
            ? "text-green-600 text-xs font-semibold mb-6 mt-[6px] mx-8 "
            : "text-red-600 text-xs font-semibold mb-6 mt-[6px] mx-8 "
        }
      >
        *Must match first password
      </p>
    );
  };
  /** Displays Sign Up Large Screen Layout */
  const signUpLargeScreenLayout = () => {
    return (
      <div className="relative hidden md:block lg:block">
        <nav className="fixed w-full">
          <Header />
        </nav>
        <div className="flex justify-center">
          <div className="my-[71px] h-914 w-[609px] bg-white">
            <p className="mt-[72px] ml-20 font-Inter font-[700] text-3xl text-black">
              Sign up with us
            </p>
            <form onSubmit={(e) => handleSignUp(e)}>
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
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
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
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
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
                    value={email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                    onChange={(e) => validateEmail(e.target.value)}
                  />
                </label>
              </div>
              {isEmailValid ? null : displayEmailErrorText()}
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="tel">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Phone number
                  </p>
                  <PhoneInput
                    id="mobile"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => handleMobileNumber(e)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
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
                    type={showPassword ? "text" : "password"}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
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
              {isPasswordValid ? null : displayPasswordCriteria()}
              <div className="mt-6 mx-20 w-[450]">
                <label className="" htmlFor="reEnterPassword">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Confirm password
                  </p>
                  <input
                    id="reEnterPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="Re-enter Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                    required
                  />
                  <span>
                    {showConfirmPassword ? (
                      <PasswordShow
                        className="-mt-10 pr-2 ml-[420px]"
                        onClick={() => handleShowConfirmPassword()}
                      />
                    ) : (
                      <PasswordHide
                        className="-mt-10 pr-2 ml-[420px]"
                        onClick={() => handleShowConfirmPassword()}
                      />
                    )}
                  </span>
                </label>
              </div>
              {matchFirstPassword ? null : displayConfirmPasswordErrorText()}
              <div className="mt-10 mx-20 w-[450] bg-[#FFFFFF]">
                <button
                  type="submit"
                  onClick={(e) => handleSignUp(e)}
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] active:bg-[#12AE62] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#16D176] appearance-none focus:outline-none"
                >
                  {buttonIsLoading ? true : <p>Create account</p>}
                </button>
                <button
                  type="submit"
                  onClick={() => navigate(NonAuthRoutes.landingPage)}
                  className="mt-4 py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#16D176] appearance-none focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  id="login-button"
                  type="submit"
                  onClick={() => {
                    navigate(NonAuthRoutes.logIn);
                  }}
                  className="mt-6 mb-10 mx-24 text-center"
                >
                  Already have an account?
                  <span className="text-[#16D176]"> Log In</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="">
          <OnboardingFooter />
        </div>
      </div>
    );
  };
  const signUpSmallScreenLayout = () => {
    return (
      <div className="md:hidden lg:hidden w-full">
        <nav className="fixed w-full">
          <Header />
        </nav>
        <div className="flex justify-center items-center">
          <div className="h-[890px]  w-[390px] bg-white mb-12">
            <p className="ml-6 mt-[120px] font-Inter font-[700] text-2xl text-black">
              Create account
            </p>
            <form onSubmit={(e) => handleSignUp(e)}>
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
                    onChange={(e) => setFirstName(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                    required
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
                    onChange={(e) => setLastName(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                    required
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
                    value={email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    onChange={(e) => validateEmail(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              {isEmailValid ? null : displayEmailErrorTextMobile()}
              <div className="mt-6 mx-6 w-[342]">
                <label className="" htmlFor="mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Phone number
                  </p>
                  <PhoneInput
                    id="mobile2"
                    type="tel"
                    value={phoneNumber}
                    onChange={() => handleMobileNumber()}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                    required
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
                    type={showPassword ? "text" : "password"}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                    required
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

              {isPasswordValid ? null : displayPasswordCriteriaMobile()}

              <div className="mt-6 mx-6 w-[342]">
                <label className="" htmlFor="reEnterPassword-mobile">
                  <p className="mb-2 text-base font-sans font-[400] text-black">
                    Confirm password
                  </p>
                  <input
                    id="re-enter-password-mobile"
                    type={showConfirmPassword ? "text" : "password"}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="Re-enter Password"
                    value={password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176]  appearance-none focus:outline-none"
                    required
                  />
                  <span className="absolute inset-y-[1667/100] mr-9 ">
                    {showConfirmPassword ? (
                      <PasswordShow
                        className="absolute  -ml-7 pr-2 mt-4"
                        onClick={() => handleShowConfirmPassword()}
                      />
                    ) : (
                      <PasswordHide
                        className="absolute  -ml-7 pr-2 mt-4"
                        onClick={() => handleShowConfirmPassword()}
                      />
                    )}
                  </span>
                </label>
              </div>
              {matchFirstPassword
                ? null
                : displayConfirmPasswordErrorTextMobile()}
              <div className="mt-6 mx-6 w-[342] ">
                <button
                  id="createAccountButtonMobile"
                  type="submit"
                  onClick={(e) => handleSignUp(e)}
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] active:bg-[#12AE62] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#16D176] appearance-none focus:outline-none"
                >
                  {buttonIsLoading ? (
                    <div>
                      {" "}
                      <LoadingButton />{" "}
                    </div>
                  ) : (
                    <p>Create account</p>
                  )}
                </button>
              </div>
              <div className="mt-6 mx-6 w-[342] ">
                <button
                  id="cancel-button-mobile"
                  type="submit"
                  onClick={() => navigate(NonAuthRoutes.landingPage)}
                  className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#16D176] appearance-none focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  id="login-mobile-button"
                  type="submit"
                  onClick={() => {
                    navigate(NonAuthRoutes.logIn);
                  }}
                  className="mt-6 mx-14 mb-8 w-[342] text-center text-sm"
                >
                  Already have an account?
                  <span className="text-[#16D176]"> Log In </span>
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
      {signUpLargeScreenLayout()}
      {signUpSmallScreenLayout()}
    </div>
  );
}

export default SignUp;
