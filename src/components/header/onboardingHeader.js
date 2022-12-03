import React from "react";
import { ReactComponent as Deliverycoglogo } from "../../assets/svg/delivery-cog-logo.svg";
import { ReactComponent as ProfileImage } from "../../assets/svg/profile-Image.svg";

function OnboardingHeader() {
  return (
    <div className="sticky top-0 z-50 ">
      <div className=" h-[152px] bg-white border-b-1 pb-2 pt-2">
        <nav className=" flex  ">
          <Deliverycoglogo className=" ml-[121px] mt-[62px] mb-[42px]" />
          <ul className="flex  mt-[74px] mb-[54px]  text-[#333333] ">
            <li className=" ml-[94px] w-12 h-6 font-Inter font-bold text-[18px] leading-6  ">
              Home
            </li>
            <li className=" ml-[80px] w-12 h-6 font-Inter font-bold text-[18px] leading-6">
              Delivery
            </li>
            <li className=" ml-[80px] w-12 h-6 font-Inter font-bold text-[18px] leading-6">
              Trips
            </li>
            <li className=" ml-[80px] w-12 h-6 font-Inter font-bold text-[18px] leading-6">
              Support
            </li>
          </ul>
          <ProfileImage className=" ml-[333px]  mt-[60px] mb-[44px]" />
        </nav>
      </div>
    </div>
  );
}

export default OnboardingHeader;
