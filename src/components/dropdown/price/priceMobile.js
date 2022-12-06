import React from "react";

function priceMobile() {
  return (
    <div className="sm:block md:hidden lg:hidden">
      <div className="flex flex-col items-center">
        <div className="w-[382px] ">
          <p className="mt-2  text-sm text-[#282828] font-[400] font-lato">
            Enter estimated price
          </p>
          <div className="dropDownBtn flex flex-col items-start mt-[9px] w-full h-12 ">
            <input
              type="text"
              placeholder="#"
              className=" px-2 py-2 w-[346px] h-9 border-[#b7b5b5] border-2 text-sm "
            />
            <div className="flex ml-[2px] mt-[10px] w-full">
              <input
                type="checkbox"
                name="negotiate"
                id="checkbox"
                className="bg-[#12AE62] "
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

export default priceMobile;
