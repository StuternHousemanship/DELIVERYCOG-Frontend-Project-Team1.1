import React from "react";
// import DropDown from "../assets/svg/DropDown.svg";

function addTrip() {
  return (
    <div className="bg-deliverycog-background-grey-color">
      {/* <div className="ml-[181px]"> */}
      <h3 className="text-3xl font-[400] text-black">Add a trip</h3>
      <p className="text-deliverycog-grey-text-color text-sm mt-4">
        kindly provide the information below to help you add a trip
      </p>
      {/* </div> */}
      <section className="mx-[181px] mt-8 w-[1078px] h-[293px] flex flex-col items-start px-8 py-8 bg-">
        <div className="flex justify-between w-[1013]">
          <title className="text-black ml-8 mt-8 font-[700] text-2xl font-lato">
            Departure
          </title>
          {/* <DropDown /> */}
        </div>
        <div>
          <label htmlFor="departure_date">
            <p>Departure date</p>
            <input type="date" name="departureDate" id="section-1" />
          </label>
        </div>
      </section>
    </div>
  );
}

export default addTrip;
