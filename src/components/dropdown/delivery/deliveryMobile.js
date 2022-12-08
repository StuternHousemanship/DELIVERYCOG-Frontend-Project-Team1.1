import React from "react";

function deliveryMobile() {
  return (
    <div className=" sm:block md:hidden lg:hidden">
      <div className="flex flex-col items-center">
        <div className="w-[382px] ">
          <p className="mt-4  text-sm text-[#282828] font-[400] font-lato">
            Destination state
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[6px] w-[346px] h-9 border-spacing-1 border-[#b7b5b5]">
            <input
              type="text"
              name="deliveryState"
              id="deliveryState2"
              placeholder="State"
              className="px-4 py-2 h-9 w-full border-[#b7b5b5] border-2 rounded-none border-spacing-1 text-[#282828] text-sm font-[400]"
            />
          </div>
        </div>
        <div className="w-[382px]">
          <p className="mt-[18px]  text-sm text-[#282828] font-[400] font-lato">
            Destination city
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[6px] w-[346px] h-9 border-spacing-1 border-[#b7b5b5]">
            <input
              type="text"
              name="deliveryCity"
              id="deliveryCity"
              placeholder="City"
              className="px-4 py-2 h-9 w-full border-[#b7b5b5] border-2 rounded-none border-spacing-1 text-[#282828] text-sm font-[400]"
            />
          </div>
        </div>
        <div className="w-[382px]">
          <p className="mt-4  text-sm text-[#282828] font-[400] font-lato">
            Choose delivery address
          </p>
          <div className="flex justify-items-center">
            <input
              type="radio"
              name="Enter pickup address"
              id="pickUp"
              className="mt-[18.4px] w-[15.2px] h-[15.2px]  bg-[#16D176]"
            />{" "}
            <span className="text-lato mt-[16px] ml-2 text-[400] text-sm text-[#6D6464]">
              Enter delivery address
            </span>
          </div>
          <input
            id="pickupAddress"
            type="text"
            placeholder="Delivery Address"
            className="dropDownBtn px-4 py-2 flex justify-between items-center mt-[9px] w-[346px] h-9 border-spacing-1 border-[#BDBDBD] border-2 "
          />
        </div>
        <div className="w-[382px]">
          <div className="flex justify-items-center mt-[16px]">
            <input
              type="radio"
              name="Enter pickup address"
              id="pickUp"
              className=" mt-[18.4px] w-[15.2px] h-[15.2px]  bg-[#16D176]"
            />{" "}
            <span className="text-lato mt-[16px] ml-2 text-[400] text-sm text-[#6D6464]">
              Deliver to customers address
            </span>
          </div>
          <div>
            {" "}
            <p className="mt-2 text-lato text-xs text-[400] text-[#6D6464]">
              Items will be delivered to customers address
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default deliveryMobile;
