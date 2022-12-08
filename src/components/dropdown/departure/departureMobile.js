import React from "react";
import { ReactComponent as ToggleDownSmallIcon2 } from "../../../assets/svg/toggleSmall.svg";

function departureMobile() {
  return (
    <div className="sm:block md:hidden lg:hidden">
      <div className="flex flex-col items-center">
        <div className="w-[382px] ">
          <p className="mt-4  text-sm text-[#282828] font-[400] font-lato">
            Departure date
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[6px] w-[346px] h-9 border-spacing-1 border-[#b7b5b5] border-2 ">
            <p className="text-sm font-[400] text-[#282828] my-2 mx-4">Date</p>
            <ToggleDownSmallIcon2 className="my-2 mr-[14.7px]" />
          </div>
        </div>
        <div className="w-[382px] ">
          <p className="mt-[18px]  text-sm text-[#282828] font-[400] font-lato">
            Departure Time
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[6px] w-[342px] h-9 border-spacing-1 border-[#b7b5b5] border-2 ">
            <p className="text-sm font-[400] text-[#282828] my-2 mx-4">Time</p>
            <ToggleDownSmallIcon2 className="my-2 mr-[14.7px]" />
          </div>
        </div>
        <div className="w-[382px]">
          <p className="mt-[18px]  text-sm text-[#282828] font-[400] font-lato">
            Estimated duration of trip
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[6px] w-[342px] h-9 border-spacing-1 border-[#b7b5b5] border-2 ">
            <p className="text-sm font-[400] text-[#282828] my-2 mx-4">Hours</p>
            <ToggleDownSmallIcon2 className="my-2 mr-[14.7px]" />
          </div>
        </div>
        <div className="w-[382px]">
          <div className="dropDownBtn flex justify-between items-center mt-[10px] w-[342px] h-9 border-spacing-1 border-[#b7b5b5] border-2 ">
            <p className="text-sm font-[400] text-[#282828] my-2 mx-4">Mins</p>
            <ToggleDownSmallIcon2 className="my-2 mr-[14.7px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default departureMobile;
