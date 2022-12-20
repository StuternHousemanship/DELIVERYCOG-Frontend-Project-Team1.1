import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";
import { NonAuthRoutes } from "../url";

function verifyEmail() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hidden md:block lg:block">
        <nav className="fixed w-full">
          <Header />
        </nav>
        <div className="flex justify-center items-center ">
          <div className="mt-[116px] mx-[408px] h-[500px] w-[624px] bg-white  rounded-xl border-[#092C4C] border-[1px]">
            <h1 className="  mx-[189px] w-[245px] h-10  mt-8 font-Inter  font-[700] text-[22px] leading-10  text-[#092C4C] text-center">
              Verify your email
            </h1>
            <p className=" mx-[72px]  mx-[72px]w-[318]  mt-8 text-[#6D6464]">
              Hello (User firstName),
            </p>
            <p className=" mx-[72px] mt-10 w-[318] text-[#6D6464]">
              Welcome to Delivery COG
            </p>
            <p className="  mx-[72px] w-[318] h-[38px] mt-[8px] font-Inter font-normal  leading-5 text-[16px] text-[#6D6464]  ">
              We are glad you have gotten this far. To verify your account,
              <br />
              please click on the button below.
            </p>
            <button
              type="submit"
              title="verify-email"
              className=" mx-16 [40px]  bg-[#12AE62] w-[496px] h-12  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
              onClick={() => navigate(NonAuthRoutes.logIn)}
            >
              Verify My Email
            </button>
            <div className=" w-[328px] pb-[10px]">
              <p className=" mx-[80px] mt-8 leading-[20px] text-[#6D6464] ">
                With love,
              </p>
              <p className=" mx-[80px] text-[#6D6464]">Delivery Cog Team</p>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="md:hidden lg:hidden">
        <nav className="fixed w-full">
          <Header />
        </nav>
        <div className="flex justify-center items-center">
          <div className=" ">
            <h1 className=" ml-[30px]  w-[150px] h-5  mt-[186px] font-Inter  font-[700] text-[16px] leading-5  text-[#6D6464] ">
              Verify your email
            </h1>
            <p className=" ml-[30px] mt-12 text-[#6D6464]">
              Hello (User firstName),
            </p>
            <p className=" ml-[30px] mt-10 text-[#6D6464]">
              Welcome to Delivery COG
            </p>
            <p className="  ml-[30px] w-[364px] h-[40px] mt-[10px] font-Inter font-normal  leading-5 text-[16px] text-[#6D6464]  ">
              We are glad you have gotten this far. To verify your account,
              please click on the button below.
            </p>
            <button
              type="submit"
              title="verify-email"
              className=" ml-[30px]  bg-[#12AE62] w-[342px] h-10  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
              onClick={() => navigate(NonAuthRoutes.logIn)}
            >
              Verify My Email
            </button>
            <p className=" ml-[30px] mt-16 text-[#6D6464]">Delivery Cog Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default verifyEmail;
