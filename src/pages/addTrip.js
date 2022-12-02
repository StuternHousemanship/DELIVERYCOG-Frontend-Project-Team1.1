import React from "react";
import { ReactComponent as DropDown } from "../assets/svg/DropDown.svg";

function addTrip() {
  return (
    <div className="bg-deliverycog-background-grey-color h-[1752px]">
      <div className="ml-[181px]">
        <h3 className="text-3xl font-[700] text-black">Add a trip</h3>
        <p className="text-deliverycog-grey-text-color text-sm mt-4">
          kindly provide the information below to help you add a trip
        </p>
      </div>
      <section className="mx-[181px] mt-8 w-[1078px] h-[293px] flex flex-col items-start px-8 py-8 bg-white">
        <div className="flex justify-between items-center w-[1013px] h-12 text-black border-red-500">
          <p className="text-black mt-8 font-[700] mb-12 text-2xl font-lato">
            Departure
          </p>
          <DropDown />
        </div>
        <div>
          {/* // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label>
            <p>Departure date</p>
          </label> */}
        </div>
      </section>
    </div>
  );
}

export default addTrip;
