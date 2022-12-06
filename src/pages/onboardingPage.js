import { React } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AddTripImage } from "../assets/svg/add-a-trip.svg";
import { ReactComponent as RequestDeliveryImage } from "../assets/svg/request-delivery.svg";
import { ReactComponent as MobileImages } from "../assets/svg/onboarding-page-mobile-images.svg";
import OnboardingHeader from "../components/header/onboardingHeader";
import OnboardingHamburgerHeader from "../components/header/onboardingHamburgerHeader";
import { AuthRoutes } from "../url";

function OnboardingPage() {
  const navigate = useNavigate();

  const onboardingPageLargeScreen = () => {
    return (
      <div className=" hidden md:block lg:block">
        <nav className="fixed w-full">
          <OnboardingHeader />
        </nav>

        <div className=" flex  flex-col justify-center items-center ">
          <div>
            <h1 className=" mt-[115px] w-[383px] h-10 font-Inter font-bold text-[32px] leading-10 align-middle text-[#000000] ml-5">
              Welcome to Delivery Cog
            </h1>
            <p className=" mt-6 font-normal text-[18px] leading-6 align-middle text-[#6D6464] w-[438px] h-6">
              Get fast, easy and secure delivery and trip request.
            </p>
          </div>
          <div className=" flex   gap-[132px] mt-[63px] mb-32">
            <AddTripImage
              className=" w-[408px] h-[369px] cursor-pointer "
              onClick={() => navigate(AuthRoutes.addTrip)}
            />
            <RequestDeliveryImage
              className=" w-[408px] h-[369px] cursor-pointer"
              onClick={() => navigate(AuthRoutes.requestTrip)}
            />
          </div>
        </div>
      </div>
    );
  };

  const onboardingPageSmallScreen = () => {
    return (
      <div className="md:hidden lg:hidden">
        <OnboardingHamburgerHeader />
        <div>
          <h1 className="font-bold  h-7 text-[24px] leading-7 ml-[59px] text-[#000000] mt-[54px] items-center">
            Welcome to Delivery Cog
          </h1>
          <h1 className="font-normal  h-12 text-[18px] leading-6 ml-[37px] text-[#6D6464] mt-[24px] text-center mr-6 ">
            Get fast, easy and secure delivery and trip request.
          </h1>
        </div>
        <div className=" mt-10 ml-[93px] mb-[146px]">
          <MobileImages />
        </div>
      </div>
    );
  };
  return (
    <div>
      {onboardingPageLargeScreen()}
      {onboardingPageSmallScreen()}
    </div>
  );
}

export default OnboardingPage;
