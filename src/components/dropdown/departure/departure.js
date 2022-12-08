import React from "react";

function depature() {
  return (
    <div className="hidden md:block lg:block">
      <div className="w-[1013px] flex flex-wrap">
        <div className="w-[491px] ">
          <p className="mt-6  text-sm text-[#282828] font-[400] text">
            Departure date
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#b7b5b5] rounded-sm border-none cursor-pointer ">
            <input
              type="date"
              name="depatureDate"
              id="departure"
              placeholder="Date"
              className="px-4 py-2 h-12 w-full border-[#b7b5b5] border-2 rounded-none border-spacing-1 text-[#282828] text-sm font-[400]"
            />
          </div>
        </div>
        <div className="w-[491px] ml-6">
          <p className="mt-6  text-sm text-[#282828] font-[400] text">
            Departure Time
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#b7b5b5] rounded-sm border-none cursor-pointer">
            <input
              type="time"
              name="depatureDate"
              id="departure"
              placeholder="Time"
              className="px-4 py-2 h-12 w-full border-[#b7b5b5] border-2 rounded-none border-spacing-1 text-[#282828] text-sm font-[400]"
            />
          </div>
        </div>
        <div className="w-[491px]">
          <p className="mt-6  text-sm text-[#282828] font-[400] text">
            Estimated duration of trip
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#b7b5b5] rounded-sm border-none cursor-pointer">
            <input
              type="hour"
              name="depatureDate"
              id="departure"
              placeholder="Hour"
              className="px-4 py-2 h-12 w-full border-[#b7b5b5] border-2 rounded-none border-spacing-1 text-[#282828] text-sm font-[400]"
            />
          </div>
        </div>
        <div className="w-[491px] ml-6">
          <p className="mt-6  text-sm text-[#ffffff] font-[400] text">
            Departure date
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#b7b5b5] rounded-sm border-none cursor-pointer">
            {/* <p className="text-sm font-[400] text-[#282828] my-3 mx-4">Mins</p>
            <ToggleDownSmallIcon className="my-3 mr-[20.7px]" /> */}
            <input
              type="mins"
              name="depatureDate"
              id="departure"
              placeholder="Mins"
              className="px-4 py-2 h-12 w-full border-[#b7b5b5] border-2 rounded-none border-spacing-1 text-[#282828] text-sm font-[400]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default depature;
