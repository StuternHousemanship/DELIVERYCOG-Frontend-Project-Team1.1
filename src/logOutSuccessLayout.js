import React from "react";
import { ReactComponent as Deliverycoglogo } from "./assets/svg/delivery-cog-logo.svg";
import { ReactComponent as SuccessIcon } from "./assets/svg/successIcon.svg";
import { ReactComponent as SuccessIconMobile } from "./assets/svg/successIconMobile.svg";

function LogOutSuccessLayout() {
  const logOutSuccessLargeScreen = () => {
    return (
      <div className="hidden md:block lg:block">
        <div className=" flex flex-col justify-center items-center">
          <Deliverycoglogo className=" mt-[65px]  " />
          <SuccessIcon className=" mt-[300px]" />
          <div>
            <p className=" text-[24px] leading-7 text-[#6D6464] w-[336px] h-14 mt-10 font-normal text-center">
              You have successfully logged out
            </p>
          </div>
        </div>
      </div>
    );
  };

  const logOutSuccessSmallScreen = () => {
    return (
      <div className=" md:hidden lg:hidden">
        <div className=" flex flex-col justify-center items-center">
          <Deliverycoglogo className=" mt-[53px]  " />
          <div>
            <p className=" text-[24px] leading-7 text-[#6D6464] w-[288px] h-14 mt-[100px] mx-[52px]  font-bold text-center">
              You have successfully logged out
            </p>
            <SuccessIconMobile className=" mt-[46px]  mx-[150px] " />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {logOutSuccessLargeScreen()}
      {logOutSuccessSmallScreen()}
    </div>
  );
}

export default LogOutSuccessLayout;
