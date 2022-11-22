import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import Header from "../header";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [
    isForgotPasswordRequestSuccessful,
    setIsForgotPasswordRequestSuccessful,
  ] = useState(false);

  /* handle Forgot Password Button */
  const handleForgotPasswordButton = () => {
    setIsForgotPasswordRequestSuccessful(true);
  };

  /* displays Forgot Password Layout */
  const forgotPasswordLayout = () => {
    return (
      <div className="hidden md:block lg:block">
        <Header />
        <div className="flex justify-center items-center">
          <div className="my-[71px] h-[490px] w-[609px] bg-white">
            <p className="mt-12 font-Inter font-[700] text-4xl text-black text-center">
              Forgot Password?
            </p>
            <p className="text-center font-sans font-[500] text-[#898989] mt-[24px]">
              Enter the email used for Delivery COG. <br /> we will send you a
              link to reset reset your password
            </p>
            <form>
              <div className="mt-6 mx-20  w-[450]">
                <label className="" htmlFor="email">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Email
                  </p>
                  <input
                    id="reset-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="example@gmail.com"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-[74px] mx-20 w-[450] ">
                <button
                  type="button"
                  title="Continue"
                  onClick={() => handleForgotPasswordButton()}
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  <a href=" ">Continue</a>
                </button>
              </div>
              <div className="mt-6 mx-20 w-[450] ">
                <button
                  type="button"
                  title="Continue"
                  className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  onClick={() => navigate(NonAuthRoutes.logIn)}
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

  // eslint-disable-next-line no-unused-vars
  const forgotPasswordLayoutMobile = () => {
    return (
      <div className="md:block lg:block">
        <Header />
        <div className="flex justify-center items-center">
          <div className="my-[71px] h-[490px] w-[609px] bg-white">
            <p className="mt-12 font-Inter font-[700] text-4xl text-black text-center">
              Forgot Password?
            </p>
            <p className="text-center font-sans font-[500] text-[#898989] mt-[24px]">
              Enter the email used for Delivery COG. <br /> we will send you a
              link to reset reset your password
            </p>
            <form>
              <div className="mt-6 mx-20  w-[450]">
                <label className="" htmlFor="email">
                  <p className="mb-2 text-base font-sans font-[400] text-deliverycog-grey-text-color">
                    Email
                  </p>
                  <input
                    id="reset-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="example@gmail.com"
                    className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-[74px] mx-20 w-[450] ">
                <button
                  type="button"
                  title="Continue"
                  onClick={() => handleForgotPasswordButton()}
                  className="py-2 px-2 font-sans font-[600] bg-[#16D176] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  <a href=" ">Continue</a>
                </button>
              </div>
              <div className="mt-6 mx-20 w-[450] ">
                <button
                  type="button"
                  title="Continue"
                  className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                  onClick={() => navigate(NonAuthRoutes.logIn)}
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

  /* displays Forgot Password Success Layout */
  const forgotPasswordSuccessLayout = () => {
    return (
      <div className="sm:h-[100vh] sm:w-screen sm:bg-[#E5E5E5] flex justify-center items-center xs:w-[428px] xs:h-[900px] xs:bg-white  ">
        <div className="bg-white sm:w-[609px] sm:h-[438px] xs:w-full xs:h-full flex justify-center  relative">
          <div className="absolute sm:top-[48px] sm:left-[80px] xs:top-[335px] xs:left-[45px] mb-[40px] ">
            <h1 className="text-[#424242] font-Inter font-[700] text-[36px] leading-[44px] ">
              Forgot password
            </h1>
          </div>
          <p className="text-[#424242] xs:w-[349px] sm:w-[418px] text-[16px] leading-[19.36px] absolute sm:top-[149px] sm:left-[80px] xs:top-[411px] xs:left-[45px] mb-[40px] ">
            Kindly go to your email inbox or spam folder to confirm and change
            your password
          </p>
          <button
            type="submit"
            className=" xs:w-[338px] sm:w-[450px] xs:h-[42px] sm:h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0 bg-[#424242] text-white font-sans text-[20px] leading-[23px] font-[400] absolute sm:top-[238px] sm:left-[80px] xs:top-[505px] xs:left-[45px] "
            onClick={() => navigate(NonAuthRoutes.logIn)}
          >
            Verify
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {isForgotPasswordRequestSuccessful
        ? forgotPasswordSuccessLayout()
        : forgotPasswordLayout()}
      {
        // isForgotPasswordRequestMobileSuccessful
        // ? forgotPasswordSuccessLayoutMobile()
        // : forgotPasswordLayoutMobile()
      }
    </div>
  );
}

export default ForgotPassword;
