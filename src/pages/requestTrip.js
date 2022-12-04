import React from "react";
import OnboardingHeader from "../components/header/onboardingHeader";
import OnboardingHamburgerHeader from "../components/header/onboardingHamburgerHeader";

function requestTrip() {
  const [pickupAddress, setPickupAddress] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");
  const [dropoffAddress, setDropoffAddress] = React.useState("");
  const [itemCategory, setItemCategory] = React.useState("");

  const requestTripLargeScreen = () => {
    return (
      <div className="bg-deliverycog-background-grey-color h-[100vh] my-0 mx-auto">
        <div className="hidden md:block lg:block">
          <OnboardingHeader />
          <div className=" ">
            <h3 className="font-[700] text-[#282828] text-[32px] leading-[52px] mt-[35px] ml-[150px]">
              Request delivery
            </h3>
            <p className="text-[18px] text-[#6D6464] leading-[52px] ml-[150px]">
              Kindly provide the information below to help you request delivery
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center ">
            <section>
              <form>
                <div className="grid grid-cols-2 gap-[126px]">
                  <div>
                    <label className="mb-0" htmlFor="pickupAddress">
                      <p className="mb-2 text-base font-sans font-[400] text-black leading-[50px] mt-[40px]">
                        Pickup address
                      </p>
                      <input
                        id="pickupAddress"
                        type="pickupAddress"
                        placeholder="Enter pick-up address here"
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-[496px] border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label className="mb-0" htmlFor="dropoffAddress">
                      <p className="mb-2 text-base font-sans font-[400] text-black leading-[50px] mt-[40px]">
                        Drop-off address
                      </p>
                      <input
                        id="dropoffAddress"
                        type="dropoffAddress"
                        placeholder="Enter drop off address here"
                        value={dropoffAddress}
                        onChange={(e) => setDropoffAddress(e.target.value)}
                        className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-[496px] border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[126px]">
                  <div>
                    <label className="mb-0" htmlFor="departureDate">
                      <p className="text-base font-sans font-[400] text-black leading-[50px]">
                        Departure date
                      </p>
                      <input
                        id="departureDate"
                        type="departureDate"
                        placeholder="Select pick-up date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-[496px] border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label className="mb-0" htmlFor="itemCategory">
                      <p className="text-base font-sans font-[400] text-black leading-[50px]">
                        Item category
                      </p>
                      <input
                        id="itemCategory"
                        type="itemCategory"
                        placeholder="Select item"
                        value={itemCategory}
                        onChange={(e) => setItemCategory(e.target.value)}
                        className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-14 w-[496px] border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                </div>
              </form>
              <div className="grid grid-cols-2 gap-[126px] leading-10">
                <button
                  id="continue-button"
                  type="submit"
                  className="py-2 px-2 font-sans font-[700] text-[#FBFAFA] bg-[#12AE62] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-[496px] border rounded border-[#16D176] appearance-none focus:outline-none cursor-pointer mt-[50px]"
                >
                  Continue
                </button>
                <button
                  id="cancel-button"
                  type="submit"
                  className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-14 w-[496px] border rounded border-[#16D176] appearance-none focus:outline-none cursor-pointer mt-[50px]"
                >
                  Cancel
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };

  const requestTripSmallScreen = () => {
    return (
      <div className="bg-deliverycog-background-grey-color h-[100%] mt-0 pt-0 pl-[10px] pr-[10px] mx-auto">
        <div className="md:hidden lg:hidden ">
          <OnboardingHamburgerHeader />
          <div className=" ">
            <h3 className="font-[700] text-[#282828] text-[24px] leading-[52px] mt-[35px]">
              Request delivery
            </h3>
            <p className="text-[16px] text-[#6D6464]">
              Kindly provide the information below to help you request delivery
            </p>
          </div>
          <div className=" ">
            <section>
              <form>
                <div>
                  <div>
                    <label className="mb-0" htmlFor="pickupAddress">
                      <p className="mb-2 text-[16px] font-sans font-[400] text-black leading-[50px] mt-[40px]">
                        Pickup address
                      </p>
                      <input
                        id="pickupAddress"
                        type="pickupAddress"
                        placeholder="Enter pick-up address here"
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-[40px] w-[342px] border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label className="mb-0" htmlFor="dropoffAddress">
                      <p className="mb-2 text-[16px] font-sans font-[400] text-black leading-[50px]">
                        Drop-off address
                      </p>
                      <input
                        id="dropoffAddress"
                        type="dropoffAddress"
                        placeholder="Enter drop off address here"
                        value={dropoffAddress}
                        onChange={(e) => setDropoffAddress(e.target.value)}
                        className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-[40px] w-[342px] border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="mb-0" htmlFor="departureDate">
                      <p className="text-[16px] font-sans font-[400] text-black leading-[50px]">
                        Departure date
                      </p>
                      <input
                        id="departureDate"
                        type="departureDate"
                        placeholder="Select pick-up date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-[40px] w-[342px] border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label className="mb-0" htmlFor="itemCategory">
                      <p className="text-[16px] font-sans font-[400] text-black leading-[50px]">
                        Item category
                      </p>
                      <input
                        id="itemCategory"
                        type="itemCategory"
                        placeholder="Select item"
                        value={itemCategory}
                        onChange={(e) => setItemCategory(e.target.value)}
                        className="py-2 px-2 font-sans font-[600] text-deliverycog-grey-text-color text-base h-[40px] w-[342px] border rounded border-[#d9d6d6] hover:border-[#16D176] appearance-none focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                </div>
              </form>
              <div>
                <button
                  id="continue-button-mobile"
                  type="submit"
                  className="py-2 px-2 font-sans font-[700] text-[#FBFAFA] bg-[#12AE62] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-[14px] h-[40px] w-[342px] border rounded border-[#16D176] appearance-none focus:outline-none cursor-pointer mt-[50px]"
                >
                  Continue
                </button>
                <button
                  id="cancel-button-mobile"
                  type="submit"
                  className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-[14px] h-[40px] w-[342px] border rounded border-[#16D176] appearance-none focus:outline-none cursor-pointer mt-[20px] mb-[20px]"
                >
                  Cancel
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {requestTripLargeScreen()}
      {requestTripSmallScreen()}
    </div>
  );
}

export default requestTrip;
