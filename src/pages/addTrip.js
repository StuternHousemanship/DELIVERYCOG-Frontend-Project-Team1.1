import React from "react";
import AddATripHamburgerHeader from "../components/header/addATripHamburgerHeader";
import { ReactComponent as ToggleDown } from "../assets/svg/toggleDown.svg";
// import { ReactComponent as ToggleUp } from "../assets/svg/toggleUp.svg";
import Departure from "../components/dropdown/departure/departure";
import DepartureMobile from "../components/dropdown/departure/departureMobile";
import PickUp from "../components/dropdown/pickup/pickUp";
import PickUpMobile from "../components/dropdown/pickup/pickUpMobile";
import Delivery from "../components/dropdown/delivery/delivery";
import DeliveryMobile from "../components/dropdown/delivery/deliveryMobile";
import Price from "../components/dropdown/price/price";
import PriceMobile from "../components/dropdown/price/priceMobile";
import OnboardingHeader from "../components/header/onboardingHeader";

function addTrip() {
  // const [isActive, setIsActive] = useState(false);
  // const handleToggle = () => {
  //   setIsActive(!isActive);
  // };
  const addTripLargeScreen = () => {
    return (
      <div className="">
        <div className="bg-[#fbfafa] hidden md:block lg:block">
          <OnboardingHeader />
          <div className="mx-[181px] my-10">
            <h3 className="text-3xl font-[700] text-black">Add a trip</h3>
            <p className="text-[#6D6464] text-sm mt-4">
              kindly provide the information below to help you add a trip
            </p>
          </div>
          <form action="" method="get">
            <section className="mx-[181px] mt-8 w-[1078px] h-[293px] flex flex-col items-start px-8 py-8 bg-white">
              <div className="flex justify-between items-center w-[1013px] h-12 text-black border-red-500">
                <p className="text-black mt-8 font-[700] mb-12 text-xl font-lato">
                  Departure
                </p>
                <ToggleDown
                  className="mr-2.5"
                  // onClick={(e) => handleToggle(e)}
                />
                {/* {isActive ? <ToggleDown className="mr-2.5" /> : null}{" "}
                {setIsActive ? <ToggleUp className="mr-2.5" /> : null} */}
              </div>
              <div>
                <Departure />
              </div>
              {/* {isActive && (
                <div>
                  <Departure />
                </div>
              )} */}
            </section>
            <section className="mx-[181px] mt-8 w-[1078px] h-[361px] flex flex-col items-start px-8 py-8 bg-white">
              <div className="flex justify-between items-center w-[1013px] h-12 text-black border-red-500">
                <p className="text-black mt-8 font-[700] mb-12 text-xl font-lato">
                  Pickup
                </p>
                <ToggleDown className="mr-2.5" />
              </div>
              <div>
                <PickUp />
              </div>
            </section>
            <section className="mx-[181px] mt-8 w-[1078px] h-[361px] flex flex-col items-start px-8 py-8 bg-white">
              <div className="flex justify-between items-center w-[1013px] h-12 text-black border-red-500">
                <p className="text-black mt-8 font-[700] mb-12 text-xl font-lato">
                  Delivery
                </p>
                <ToggleDown className="mr-2.5" />
              </div>
              <div>
                <Delivery />
              </div>
            </section>
            <section className="mx-[181px] mt-8 w-[1078px] h-[237px] flex flex-col items-start px-8 py-8 bg-white">
              <div className="flex justify-between items-center w-[1013px] h-12 text-black border-red-500">
                <p className="text-black mt-8 font-[700] mb-12 text-xl font-lato">
                  Price
                </p>
                <ToggleDown className="mr-2.5" />
              </div>
              <div>
                <Price />
              </div>
            </section>
            <div className=" flex items-center mt-10 mb-[46px] mx-[181px] w-[1078px]  bg-[#FFFFFF]">
              <button
                type="submit"
                // onClick={() => navigate(NonAuthRoutes.landingPage)}
                className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-12 w-[493px] border rounded border-[#16D176] appearance-none focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                // onClick={(e) => handleSignUp(e)}
                className="py-2 px-2 ml-[92px] font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] active:bg-[#12AE62] text-deliverycog-white-text-color text-base h-12 w-[493px] border rounded border-[#16D176] appearance-none focus:outline-none"
              >
                Continue
                {/* {buttonIsLoading ? true : <p>Create account</p>} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  const addTripSmallScreen = () => {
    return (
      <div className="bg-[#fbfafa]">
        <div className="sm:block md:hidden lg:hidden">
          <AddATripHamburgerHeader />
          <form action="" method="get">
            <section className="mt-6 w-[390px] h-[392px] flex flex-col items-start px-5 py-6 bg-white">
              <div className="flex justify-between items-center w-[382px] h-8">
                <p className="text-[#282828] mt-8 font-[700] mb-12 text-xl font-lato">
                  Departure
                </p>
                <ToggleDown className="mr-[11.7px]" />
              </div>
              <div>
                <DepartureMobile />
              </div>
            </section>
            <section className="mt-6 w-[390px] h-[392px] flex flex-col items-start px-5 py-6 bg-white">
              <div className="flex justify-between items-center w-[382px] h-8">
                <p className="text-[#282828] mt-8 font-[700] mb-12 text-xl font-lato">
                  Pickup
                </p>
                <ToggleDown className="mr-[11.7px]" />
              </div>
              <div>
                <PickUpMobile />
              </div>
            </section>
            <section className="mt-6 w-[390px] h-[392px] flex flex-col items-start px-5 py-6 bg-white">
              <div className="flex justify-between items-center w-[382px] h-8">
                <p className="text-[#282828] mt-8 font-[700] mb-12 text-xl font-lato">
                  Delivery
                </p>
                <ToggleDown className="mr-[11.7px]" />
              </div>
              <div>
                <DeliveryMobile />
              </div>
            </section>
            <section className="mt-6 w-[390px] h-[189px] flex flex-col items-start px-5 py-6 bg-white">
              <div className="flex justify-between items-center w-[382px] h-8">
                <p className="text-[#282828] mt-8 font-[700] mb-12 text-xl font-lato">
                  Price
                </p>
                <ToggleDown className="mr-[11.7px]" />
              </div>
              <div>
                <PriceMobile />
              </div>
            </section>
            <div className=" flex flex-col items-center mt-10 mb-[46px] w-[390px] h-[189px]">
              <button
                type="submit"
                // onClick={() => navigate(NonAuthRoutes.landingPage)}
                className="py-2 px-2 font-sans font-[600] text-[#16D176] bg-[#ffffff] hover:bg-[#8AE8BA] active:bg-[#EBF6F0] text-base h-10 w-[342px] border rounded border-[#16D176] appearance-none focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                // onClick={(e) => handleSignUp(e)}
                className="py-2 px-2 mt-4 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] active:bg-[#12AE62] text-deliverycog-white-text-color text-base h-10 w-[342px] border rounded border-[#16D176] appearance-none focus:outline-none"
              >
                Continue
                {/* {buttonIsLoading ? true : <p>Create account</p>} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  return (
    <div>
      {addTripLargeScreen()}
      {addTripSmallScreen()}
    </div>
  );
}
export default addTrip;
