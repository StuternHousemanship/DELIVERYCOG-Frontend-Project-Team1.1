import React, { AuthRoutes } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Deliverycoglogo } from "../../assets/svg/delivery-cog-logo.svg";
import { ReactComponent as ProfileImage } from "../../assets/svg/profile-Image.svg";

function OnboardingHeader() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50 ">
      <div className=" h-[112px] bg-white border-b-1 pb-2 pt-2">
        <nav className=" flex  ">
          <button
            type="button"
            onClick={() => {
              navigate(AuthRoutes.onboardingPage);
            }}
          >
            <Deliverycoglogo className=" ml-[121px] mt-[42px] mb-[42px]" />
          </button>

          <ul className="flex  mt-[54px] mb-[54px]  text-[#333333] ">
            <li className=" ml-[94px] w-12 h-6 font-Inter font-bold text-[18px] leading-6  cursor-pointer">
              Home
            </li>
            <li className=" ml-[80px] w-12 h-6 font-Inter font-bold text-[18px] leading-6 cursor-pointer">
              Delivery
            </li>
            <li className=" ml-[80px] w-12 h-6 font-Inter font-bold text-[18px] leading-6 cursor-pointer">
              Trips
            </li>
            <li className=" ml-[80px] w-12 h-6 font-Inter font-bold text-[18px] leading-6 cursor-pointer">
              Support
            </li>
          </ul>
          <ProfileImage className=" ml-[333px]  mt-[40px] mb-[44px]" />
        </nav>
      </div>
    </div>
  );
}

export default OnboardingHeader;
