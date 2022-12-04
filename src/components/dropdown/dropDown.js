import React from "react";
import { ReactComponent as ToggleDownSmallIcon } from "../../assets/svg/toggleSmall.svg";

function dropDown() {
  const departure = () => {
    return (
      <div className="w-[1013px] flex flex-wrap">
        <div className="w-[491px] ">
          <p className="mt-6  text-sm text-[#282828] font-[400] text">
            Departure date
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#9d9b9b] ">
            <p className="text-sm font-[400] text-[#282828] my-3 mx-4">Date</p>
            <ToggleDownSmallIcon className="my-3 mr-[20.7px]" />
          </div>
        </div>
        <div className="w-[491px] ml-6">
          <p className="mt-6  text-sm text-[#282828] font-[400] text">
            Departure Time
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#d9d6d6] ">
            <p className="text-sm font-[400] text-[#282828] my-3 mx-4">Time</p>
            <ToggleDownSmallIcon className="my-3 mr-[20.7px]" />
          </div>
        </div>
        <div className="w-[491px]">
          <p className="mt-6  text-sm text-[#282828] font-[400] text">
            Estimated duration of trip
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#d9d6d6] ">
            <p className="text-sm font-[400] text-[#282828] my-3 mx-4">Hours</p>
            <ToggleDownSmallIcon className="my-3 mr-[20.7px]" />
          </div>
        </div>
        <div className="w-[491px] ml-6">
          {/* <p className="mt-6  text-sm text-[#282828] font-[400] text">
            Departure date
          </p> */}
          <div className="dropDownBtn flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#d9d6d6] ">
            <p className="text-sm font-[400] text-[#282828] my-3 mx-4">Mins</p>
            <ToggleDownSmallIcon className="my-3 mr-[20.7px]" />
          </div>
        </div>
      </div>
    );
  };
  return <div className="">{departure}</div>;
}

export default dropDown;
