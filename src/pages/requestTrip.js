import React from "react";
import Header from "../header";

function requestTrip() {
  const [pickupAddress, setPickupAddress] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");
  const [dropoffAddress, setDropoffAddress] = React.useState("");
  const [itemCategory, setItemCategory] = React.useState("");

  return (
    <div className="bg-deliverycog-background-grey-color bg-[100%]">
      <div className="hidden md:block lg:block">
        <div className="bg-white flex justify-between ">
          <Header />
          <div className="flex flex-col">
            <ul>
              <li>Home</li>
              <li>Deliveries</li>
              <li>Trips</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <h3 className="font-[700] text-[#282828] text-[32px]">
          Request delivery
        </h3>
        <p className="text-[18px] text-[#6D6464]">
          Kindy provide the information below to help you request delivery
        </p>
        <section>
          <form>
            <div>
              <label className="" htmlFor="pickupAddress">
                <p className="mb-2 text-base font-sans font-[400] text-black">
                  Pickup address
                </p>
                <input
                  id="pickupAddress"
                  type="pickupAddress"
                  placeholder="Enter pick-up address here"
                  value={pickupAddress}
                  onChange={(e) => setPickupAddress(e.target.value)}
                  className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                  required
                />
              </label>
            </div>
            <div>
              <label className="" htmlFor="departureDate">
                <p className="mb-2 text-base font-sans font-[400] text-black">
                  Departure date
                </p>
                <input
                  id="departureDate"
                  type="departureDate"
                  placeholder="Select pick-up date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                  required
                />
              </label>
            </div>
            <div>
              <label className="" htmlFor="dropoffAddress">
                <p className="mb-2 text-base font-sans font-[400] text-black">
                  Drop-off address
                </p>
                <input
                  id="dropoffAddress"
                  type="dropoffAddress"
                  placeholder="Enter drop off address here"
                  value={dropoffAddress}
                  onChange={(e) => setDropoffAddress(e.target.value)}
                  className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                  required
                />
              </label>
            </div>
            <div>
              <label className="" htmlFor="itemCategory">
                <p className="mb-2 text-base font-sans font-[400] text-black">
                  Item category
                </p>
                <input
                  id="itemCategory"
                  type="itemCategory"
                  placeholder="Select item"
                  value={itemCategory}
                  onChange={(e) => setItemCategory(e.target.value)}
                  className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-full border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                  required
                />
              </label>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default requestTrip;
