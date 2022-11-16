/* eslint-disable react/button-has-type */
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Deliverycoglogo } from "../assets/svg/delivery-cog-logo.svg";

function Dashboard() {
  const navigate = useNavigate();
  // To log out from Dashboard
  const handleLogOut = (e) => {
    e.preventDefault();
    // CLEAR DATA FROM STORAGE
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
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
      {/* mobile screen */}
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
    </div>
  );
}

export default Dashboard;
