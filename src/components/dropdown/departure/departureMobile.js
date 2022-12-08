import React from "react";

function departureMobile() {
  return (
    <div className="sm:block md:hidden lg:hidden">
      <div className="flex flex-col items-center">
        <div className="w-[382px] ">
          <p className="mt-4  text-sm text-[#282828] font-[400] font-lato">
            Departure date
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[6px] w-[346px] h-9 border-spacing-1 border-[#b7b5b5] ">
            <input
              type="date"
              name="depatureDate"
              id="departureDate"
              placeholder="Date"
              className="px-4 py-2 h-9 w-full border-[#b7b5b5] border-2 rounded-none border-spacing-1 text-[#282828] text-sm font-[400]"
            />
          </div>
        </div>
        <div className="w-[382px] ">
          <p className="mt-[18px]  text-sm text-[#282828] font-[400] font-lato">
            Departure Time
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[6px] w-[342px] h-9 border-spacing-1 border-[#b7b5b5] ">
            <input
              type="time"
              name="depatureTime"
              id="departure2"
              placeholder="Time"
              className="px-4 py-2 h-9 w-full border-[#b7b5b5] border-2 rounded-none border-spacing-1 text-[#282828] text-sm font-[400]"
            />
          </div>
        </div>
        <div className="w-[382px]">
          <p className="mt-[18px]  text-sm text-[#282828] font-[400] font-lato">
            Estimated duration of trip
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[6px] w-[342px] h-9 border-spacing-1 border-[#b7b5b5] ">
            <input
              type="hour"
              name="depatureDate"
              id="departure3"
              placeholder="Hour"
              className="px-4 py-2 h-9 w-full border-[#b7b5b5] border-2 rounded-none border-spacing-1 text-[#282828] text-sm font-[400]"
            />
          </div>
        </div>
        <div className="w-[382px]">
          <div className="dropDownBtn flex justify-between items-center mt-[10px] w-[342px] h-9 border-spacing-1 border-[#b7b5b5] ">
            <input
              type="mins"
              name="depatureDate"
              id="departure4"
              placeholder="Mins"
              className="px-4 py-2 h-9 w-full border-[#b7b5b5] border-2 rounded-none border-spacing-1 text-[#282828] text-sm font-[400]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default departureMobile;
