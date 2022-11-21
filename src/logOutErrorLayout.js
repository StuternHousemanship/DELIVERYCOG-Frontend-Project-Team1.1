import React from "react";
import { ReactComponent as Deliverycoglogo } from "./assets/svg/delivery-cog-logo.svg";
import { ReactComponent as FailureIcon } from "./assets/svg/failureIcon.svg";
import { ReactComponent as FailureIconMobile } from "./assets/svg/failureIconMobile.svg";

function LogOutErrorLayout() {
  const logOutErrorLargeScreen = () => {
    return (
      <div className="hidden md:block lg:block">
        <div className=" flex flex-col justify-center items-center">
          <Deliverycoglogo className=" mt-[65px]  " />
          <FailureIcon className=" mt-[300px]" />
          <div>
            <p className=" text-[24px] leading-7 text-[#6D6464] w-[421px] h-[32px] mt-10 font-normal text-center">
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
          <Deliverycoglogo className=" mt-[53px]  w-full ml-8 " />
          <div>
            <p className=" w-[61px]  h-7  text-[#333333] font-bold mt-[110px]  text-center mx-[165px]">
              Error!
            </p>
            <FailureIconMobile className=" mt-[46px]  mx-[150px] " />
            <p className=" text-[20px] leading-7 text-[#6D6464] w-[320px] h-14 mt-[46px] mx-[52px]   font-normal text-center">
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
