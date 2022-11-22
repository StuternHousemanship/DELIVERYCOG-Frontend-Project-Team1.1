import React from "react";
import { ReactComponent as Deliverycoglogo } from "./assets/svg/delivery-cog-logo.svg";
import { ReactComponent as FailureIcon } from "./assets/svg/failureIcon.svg";
import { ReactComponent as FailureIconMobile } from "./assets/svg/failureIconMobile.svg";
import { ReactComponent as DeliverycoglogoMobile } from "./assets/svg/delivery-cog-logo-mobile.svg";

function LogOutErrorLayout() {
  const logOutErrorLargeScreen = () => {
    return (
      <div className="hidden md:block lg:block">
        <div className=" flex flex-col justify-center items-center">
          <Deliverycoglogo className=" mt-[65px]  " />
          <FailureIcon className=" mt-[180px] w-[80px] h-[80px]" />
          <div>
            <p className=" text-[24px] leading-7 text-[#6D6464] w-[450px] h-[32px]  mt-8 font-normal text-center">
              An error occured while trying to log out
            </p>
          </div>
        </div>
      </div>
    );
  };

  const logOutErrorSmallScreen = () => {
    return (
      <div className=" md:hidden lg:hidden">
        <div className=" flex flex-col justify-center items-center">
          <DeliverycoglogoMobile className=" mt-[53px]   mr-32" />
          <div className=" flex flex-col justify-center items-center">
            <p className=" w-[61px]  h-7  text-[#333333] font-bold mt-[90px]  text-center ">
              Error!
            </p>
            <FailureIconMobile className=" mt-[30px]   w-16 h-16" />
            <p className=" text-[20px] leading-7 text-[#6D6464] w-[320px] h-14 mt-[30px]   font-normal text-center">
              An error occured while trying to log out
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {logOutErrorLargeScreen()}
      {logOutErrorSmallScreen()}
    </div>
  );
}

export default LogOutErrorLayout;
