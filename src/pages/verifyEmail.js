import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";

function verifyEmail() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hidden md:block lg:block">
        <div className="flex justify-center items-center">
          <div className="my-[231px] h-[438px] w-[609px] bg-white">
            <h1 className=" ml-20  w-[297px] h-11 top-12 mt-12 font-Inter  font-[700] text-4xl  text-deliverycog-grey-background2-color">
              Verify your email
            </h1>
            <p className=" ml-20 w-[418px] h-[38px] mt-[57px] font-Inter font-normal  leading-5 text-[16px]  ">
              Kindly go to your email inbox or spam folder to confirm and verify
              your email address.
            </p>
            <button
              type="submit"
              title="verify-email"
              className=" ml-20  bg-deliverycog-grey-background2-color w-[450px] h-14  rounded text-white text-lg mt-[87px]"
              onClick={() => navigate(NonAuthRoutes.logIn)}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="md:hidden lg:hidden">
        <div className="flex justify-center items-center">
          <div className=" w-[440] h-[329px] mt-[250px] ">
            <h1 className=" font-Inter font-bold  text-[27px] leading-8 text-deliverycog-grey-background2-color w-56 h-8 mt-9 ">
              Verify your email
            </h1>
            <p className=" w-[349px] h-[38px]  mt-10 font-Inter font-normal text-[16px] leading-5 text-black">
              Kindly go to your email inbox or spam folder to confirm and verify
              your email address.
            </p>
            <button
              type="submit"
              title="verify-email"
              className=" w-[338px] h-[42px] rounded-sm bg-deliverycog-grey-background2-color text-white mt-12 "
              onClick={() => navigate(NonAuthRoutes.logIn)}
            >
              okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default verifyEmail;
