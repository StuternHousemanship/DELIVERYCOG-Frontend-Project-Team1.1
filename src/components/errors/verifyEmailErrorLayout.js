import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import Header from "../header/header";
import { ReactComponent as FailureIcon } from "../../assets/svg/failureIcon.svg";
import { ReactComponent as FailureIconMobile } from "../../assets/svg/failureIconMobile.svg";

function VerifyEmailFailure() {
  const navigate = useNavigate();
  // /** Create Account Error Layout */
  const verifyEmailFailure = () => {
    return (
      <div>
        {/** Large screen */}
        <div className="hidden md:block lg:block">
          <Header />
          <div className="flex justify-center items-center">
            <div className="my-[90px] h-[470px] w-[624px] bg-white  rounded-xl border-[#092C4C] border-[1px]">
              <FailureIcon className=" mx-[250px] mt-[50px] w-[88.89px] h-[88.89px] flex justify-center items-center" />
              <h1 className=" mx-[160px]  w-[320px] h-31  mt-10 font-Inter  font-[900] text-[26px] leading-10  text-[#333333] ">
                Verification Unsuccessful
              </h1>
              <p className=" ml-[110px] mt-10 text-[#6D6464] text-[20px]">
                An error occured while creating your account
              </p>
              <button
                type="submit"
                title="verify-email"
                className=" ml-[72px]  bg-[#12AE62] w-[496px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
                onClick={() => navigate(NonAuthRoutes.logIn)}
              >
                Resend Email
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const verifyEmailFailureMobile = () => {
    return (
      <div>
        {/** Small screen */}
        <div className="sm:block md:hidden lg:hidden w-[390px] h-[844px]">
          <Header />
          <div className="flex justify-center items-center">
            <div className="my-[30px] h-[405px] w-[390px] bg-white">
              <h1 className=" mx-[100px] w-[294px] h-[30px] font-Inter  font-[700] text-[20px] leading-10  text-[#333333] text-center">
                Verification Unsuccessful
              </h1>
              <FailureIconMobile className=" mx-[200px] mt-[50px] w-[88.89px] h-[88.89px] flex justify-center items-center" />
              <p className=" ml-[72px] mt-10 text-[#6D6464] text-center">
                An error occured while creating your account
              </p>
              <button
                type="submit"
                title="verify-email"
                className=" ml-[72px]  bg-[#12AE62] w-[342px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
                onClick={() => navigate(NonAuthRoutes.logIn)}
              >
                Resend Email
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {verifyEmailFailure()}
      {verifyEmailFailureMobile()}
    </div>
  );
}

export default VerifyEmailFailure;
