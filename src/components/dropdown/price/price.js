import React from "react";

function price() {
  return (
    <div className="hidden md:block lg:block">
      <div className="w-[1013px] flex flex-wrap">
        <div className="w-[491px] ">
          <p className="mt-2  text-sm text-[#282828] font-[400] text">
            Enter estimated price
          </p>
          <div className="dropDownBtn flex flex-col items-center mt-[9px] w-full h-12 border-spacing-1">
            <input
              type="text"
              placeholder="#"
              className=" px-4 py-[14px] w-[496px] h-12  border-[#b7b5b5] border-2 "
            />
            <div className="flex ml-[2px] mt-[10px] w-full">
              <input
                type="checkbox"
                name="negotiate"
                id="checkbox"
                className="bg-green-700 "
              />
              <span className=" ml-1 text-lato text-[400] text-sm text-[#000000]">
                Negotiable
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default price;
