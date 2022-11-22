import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "./url";
import Header from "./header";
import { ReactComponent as FailureIcon } from "./assets/svg/failureIcon.svg";
import { ReactComponent as FailureIconMobile } from "./assets/svg/failureIconMobile.svg";

function resetPasswordErrorLayout() {
  const navigate = useNavigate();
  const resetPasswordFailure = () => {
    return (
      <div>
        {/** reset password error large screen layout */}
        <div className="hidden md:block lg:block">
          <Header />
          <div className="flex justify-center items-center">
            <div className="my-[90px] h-[520px] w-[624px] bg-white  rounded-xl border-[#092C4C] border-[1px]">
              <FailureIcon className=" mt-[6px] flex justify-center items-center" />
              <h1 className=" ml-[189px]  w-[260px] h-10  mt-10 font-Inter  font-[700] text-[32px] leading-10  text-[#333333] text-left">
                Error
              </h1>
              <p className=" ml-[72px] mt-10 text-[#000000]">
                Something went wrong try again
              </p>
              <button
                type="submit"
                title="reset-paswword"
                className=" ml-[72px]  bg-[#12AE62] w-[496px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
                onClick={() => navigate(NonAuthRoutes.resetPassword)}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const resetPasswordFailureMobile = () => {
    return (
      <div>
        {/** reset password error small screen layout */}
        <div className="sm:block md:hidden lg:hidden w-[390px] h-[844px]">
          <Header />
          <div className="flex justify-center items-center">
            <div className="my-[90px] h-[520px] w-[624px] bg-white  rounded-xl border-[#092C4C] border-[1px]">
              <FailureIconMobile className=" mt-[6px] flex justify-center items-center" />
              <h1 className=" ml-[189px]  w-[260px] h-10  mt-10 font-Inter  font-[700] text-[32px] leading-10  text-[#333333] text-left">
                Error
              </h1>
              <p className=" ml-[72px] mt-10 text-[#000000]">
                Something went wrong try again
              </p>
              <button
                type="submit"
                title="reset-password-mobile"
                className=" ml-[72px]  bg-[#12AE62] w-[342px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
                onClick={() => navigate(NonAuthRoutes.resetPassword)}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {resetPasswordFailure()}
      {resetPasswordFailureMobile()}
    </div>
  );
}

export default resetPasswordErrorLayout;
