import React from "react";
import { ReactComponent as FailureIcon } from "../../assets/svg/failureIcon.svg";
import { ReactComponent as FailureIconMobile } from "../../assets/svg/failureIconMobile.svg";
// import OnboardingHeader from "../header/onboardingHeader";

function addTripErrorLayout() {
  const addTripFailure = () => {
    return (
      <div>
        {/** Large screen */}
        <div className="hidden md:block lg:block">
          {/* <nav>
            <OnboardingHeader />
          </nav> */}
          <div className="flex justify-center items-center">
            <div className="my-[90px] h-[470px] w-[624px] bg-white  rounded-xl border-[#092C4C] border-[1px]">
              <FailureIcon className=" mx-[250px] mt-[50px] w-[88.89px] h-[88.89px] flex justify-center items-center" />
              {/* <h1 className=" mx-[160px]  w-[320px] h-31  mt-10 font-Inter  font-[900] text-[26px] leading-10  text-[#333333] ">
                Verification Unsuccessful
              </h1> */}
              <p className=" ml-[110px] mt-10 text-[#6D6464] text-[20px]">
                Looks like there was an error while adding your trip
              </p>
              <button
                type="submit"
                title="verify-email"
                className=" ml-[72px]  bg-[#12AE62] w-[496px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
                // onClick={() => navigate(NonAuthRoutes.logIn)}
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const addTripFailureMobile = () => {
    return (
      <div>
        {/** Small screen */}
        <div className="sm:block md:hidden lg:hidden w-[390px] h-[844px]">
          {/* <nav>
            <OnboardingHeader />
          </nav> */}
          <div className="flex justify-center items-center">
            <div className="my-[30px] h-[405px] w-[390px] bg-white">
              {/* <h1 className=" mx-[100px] w-[294px] h-[30px] font-Inter  font-[700] text-[20px] leading-10  text-[#333333] text-center">
                Verification Unsuccessful
              </h1> */}
              <FailureIconMobile className=" mx-[200px] mt-[50px] w-[88.89px] h-[88.89px] flex justify-center items-center" />
              <p className=" ml-[72px] mt-10 text-[#6D6464] text-center">
                Looks like there was an error while adding your trip
              </p>
              <button
                type="submit"
                title="verify-email"
                className=" ml-[72px]  bg-[#12AE62] w-[342px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
                // onClick={() => navigate(NonAuthRoutes.logIn)}
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {addTripFailure()}
      {addTripFailureMobile()}
    </div>
  );
}

export default addTripErrorLayout;
