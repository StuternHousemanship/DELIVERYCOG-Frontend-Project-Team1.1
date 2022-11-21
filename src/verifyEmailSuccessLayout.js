import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "url";
import Header from "./header";
import { ReactComponent as SuccessIcon } from "./assets/svg/successIcon.svg";
import { ReactComponent as SuccessIconMobile } from "./assets/svg/successIconMobile.svg";

function VerifyEmailSuccess() {
  const navigate = useNavigate();
  // /** Create Account Error Layout */
  const verifyEmailSuccess = () => {
    return (
      <div>
        {/** Large screen */}
        <div className="hidden md:block lg:block">
          <Header />
          <div className="flex justify-center items-center">
            <div className="my-[90px] h-[520px] w-[624px] bg-white  rounded-xl border-[#092C4C] border-[1px]">
              <SuccessIcon className=" mt-[6px] flex justify-center items-center" />
              <h1 className=" ml-[189px]  w-[260px] h-10  mt-10 font-Inter  font-[700] text-[32px] leading-10  text-[#333333] text-left">
                Verification Successful
              </h1>
              <p className=" ml-[72px] mt-10 text-[#000000]">
                You have successfully verified your email
              </p>
              <button
                type="submit"
                title="verify-email"
                className=" ml-[72px]  bg-[#12AE62] w-[496px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
                onClick={() => navigate(NonAuthRoutes.logIn)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const verifyEmailSuccessMobile = () => {
    return (
      <div>
        {/** Small screen */}
        <div className="sm:block md:hidden lg:hidden w-[390px] h-[844px]">
          <Header />
          <div className="flex justify-center items-center">
            <div className="my-[90px] h-[520px] w-[624px] bg-white  rounded-xl border-[#092C4C] border-[1px]">
              <SuccessIconMobile className=" mt-[6px] flex justify-center items-center" />
              <h1 className=" ml-[189px]  w-[260px] h-10  mt-10 font-Inter  font-[700] text-[32px] leading-10  text-[#333333] text-left">
                Verification Successful
              </h1>
              <p className=" ml-[72px] mt-10 text-[#000000]">
                You have successfully verified your email
              </p>
              <button
                type="submit"
                title="verify-email"
                className=" ml-[72px]  bg-[#12AE62] w-[342px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
                onClick={() => navigate(NonAuthRoutes.logIn)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {verifyEmailSuccess()}
      {verifyEmailSuccessMobile()}
    </div>
  );
}

export default VerifyEmailSuccess;
