import React from "react";
import { ReactComponent as Deliverycoglogo } from "../../assets/svg/delivery-cog-logo.svg";
import { ReactComponent as SuccessIcon } from "../../assets/svg/successIcon.svg";
import { ReactComponent as SuccessIconMobile } from "../../assets/svg/successIconMobile.svg";
import { ReactComponent as DeliverycoglogoMobile } from "../../assets/svg/delivery-cog-logo-mobile.svg";

function LogOutSuccessLayout() {
  const logOutSuccessLargeScreen = () => {
    return (
      <div className="hidden md:block lg:block">
        <div className=" flex flex-col justify-center items-center">
          <Deliverycoglogo className=" mt-[65px]  " />
          <SuccessIcon className=" mt-[180px] w-20 h-20" />
          <div>
            <p className=" text-[24px] leading-7 text-[#6D6464] w-[336px] h-14 mt-8 font-normal text-center">
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
          <DeliverycoglogoMobile className=" mt-[53px]  mr-32" />
          <div className=" flex flex-col justify-center items-center">
            <p className=" text-[24px] leading-7 text-[#6D6464] w-[288px] h-14 mt-[80px]  font-bold text-center">
              You have successfully logged out
            </p>
            <SuccessIconMobile className=" mt-[30px]  " />
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
