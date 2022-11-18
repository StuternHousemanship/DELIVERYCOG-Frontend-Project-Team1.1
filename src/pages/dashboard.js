/* eslint-disable react/button-has-type */
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Deliverycoglogo } from "../assets/svg/delivery-cog-logo.svg";
import { ReactComponent as SuccessIcon } from "../assets/svg/successIcon.svg";
import { ReactComponent as SuccessIconMobile } from "../assets/svg/successIconMobile.svg";
import { ReactComponent as FailureIcon } from "../assets/svg/failureIcon.svg";
import { ReactComponent as FailureIconMobile } from "../assets/svg/failureIconMobile.svg";

function Dashboard() {
  const navigate = useNavigate();
  // To log out from Dashboard

  const [isLogOutSuccessful, setIsLogOutSuccessful] = useState(false);

  const handleLogOut = (e) => {
    e.preventDefault();
    // CLEAR DATA FROM STORAGE
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
    setIsLogOutSuccessful(true);
  };

  const logOutLargeScreen = () => {
    return (
      <div className="hidden md:block lg:block">
        <div className=" flex flex-col justify-center items-center">
          <Deliverycoglogo className=" mt-[65px]  " />
          <div>
            <button
              onClick={handleLogOut}
              className=" bg-[#16D176] w-[496px] h-[56px] mt-[374px] text-white"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    );
  };

  const logOutSmallScreen = () => {
    return (
      <div className=" md:hidden lg:hidden">
        <div className=" flex flex-col justify-center items-center">
          <Deliverycoglogo className=" mt-[53px]  " />
          <div>
            <button
              onClick={handleLogOut}
              className=" bg-[#16D176] w-[342px] h-[40px] mt-[320px] text-white"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    );
  };

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
      {/* {Large Screen} */}
      {logOutLargeScreen()}
      {isLogOutSuccessful ? logOutSuccessLargeScreen : logOutErrorLargeScreen}

      {/* Small Screen */}
      {logOutSmallScreen()}
      {isLogOutSuccessful ? logOutSuccessSmallScreen : logOutErrorSmallScreen}
    </div>
  );
}

export default Dashboard;
