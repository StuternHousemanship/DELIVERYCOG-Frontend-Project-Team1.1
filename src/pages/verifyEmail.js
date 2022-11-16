import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import Header from "../header";
import { ReactComponent as DeliverycoglogoMobile } from "../assets/svg/delivery-cog-logo-mobile.svg";

export default function verifyEmailMsg() {
  const navigate = useNavigate();

  return (
    <div>
      {/** Large screen */}
      <div className="hidden md:block lg:block">
        <Header />
        <div className="flex justify-center items-center">
          <div className="my-[90px] h-[520px] w-[624px] bg-white  rounded-xl border-[#092C4C] border-[1px]">
            <h1 className=" ml-[189px]  w-[260px] h-10  mt-10 font-Inter  font-[700] text-[32px] leading-10  text-[#092C4C] text-left">
              Verify your email
            </h1>
            <p className=" ml-[72px] mt-10 text-[#6D6464]">
              Hello (User firstName),
            </p>
            <p className=" ml-[72px] mt-10 text-[#6D6464]">
              Welcome to Delivery COG
            </p>
            <p className="  ml-[72px] w-[418px] h-[38px] mt-[8px] font-Inter font-normal  leading-5 text-[16px] text-[#6D6464]  ">
              We are glad you have gotten this far. To verify your account,
              please click on the button below.
            </p>
            <button
              type="submit"
              title="verify-email"
              className=" ml-[72px]  bg-[#12AE62] w-[496px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
              onClick={() => navigate(NonAuthRoutes.logIn)}
            >
              Verify My Email
            </button>
            <p className=" ml-[72px] w-[344px] h-[36px] mt-[8px] font-Inter font-normal leading-4 text-[14px] text-[#385EBF]">
              https://www.deliverycog.com/login/reset/?token=BWpIoeRGk3tmFt5konSeIQ&utm_medium=email&utm_source=server_emails&utm_content=reset-password
            </p>
            <p className=" ml-20 mt-12 leading-[20px] text-[#6D6464] ">
              With love,
            </p>
            <p className=" ml-20 text-[#6D6464]">Delivery Cog Team</p>
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="md:hidden lg:hidden">
        <DeliverycoglogoMobile className=" mt-[65px] ml-[29px] " />
        <div className="flex justify-center items-center">
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
            We are glad you have gotten this far. To verify your account, please
            click on the button below.
          </p>
          <button
            type="submit"
            title="verify-email"
            className=" ml-[30px]  bg-[#12AE62] w-[342px] h-10  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
            onClick={() => navigate(NonAuthRoutes.logIn)}
          >
            Verify My Email
          </button>
          <p className=" ml-[72px] w-[344px] h-[36px] mt-[8px] font-Inter font-normal leading-4 text-[14px] text-[#385EBF]">
            https://www.deliverycog.com/login/reset/?token=BWpIoeRGk3tmFt5konSeIQ&utm_medium=email&utm_source=server_emails&utm_content=reset-password
          </p>
          <p className=" ml-20 mt-16 leading-[20px] text-[#6D6464] ">
            With love,
          </p>
          <p className=" ml-[30px] text-[#6D6464]">Delivery Cog Team</p>
        </div>
      </div>
    </div>
  );
}
