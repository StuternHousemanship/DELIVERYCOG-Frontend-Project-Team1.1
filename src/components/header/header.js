import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as DeliverycogLogo } from "../../assets/svg/delivery-cog-logo.svg";
import { ReactComponent as DeliverycogLogoMobile } from "../../assets/svg/delivery-cog-logo-mobile.svg";

function Header() {
  const navigate = useNavigate();
  /** global header  */
  /* eslint no-undef: "error" */
  const largeScreenHeader = () => {
    return (
      <div className="sticky top-0 z-50 hidden md:block lg:block">
        <div className="border-b-1 bg-white pb-4 pt-4 ">
          <button
            type="button"
            onClick={() => {
              navigate(NonAuthRoutes.landingPage);
            }}
          >
            <DeliverycogLogo className="ml-[120px] mt-[20px]" />
            {/* <CitroneLogo className="" /> */}
          </button>
        </div>
      </div>
    );
  };
  const smallScreenHeader = () => {
    return (
      <div className="sticky top-0 z-50  md:hidden lg:hidden">
        <div className=" bg-white border-b-1 pb-4 pt-4 text-left">
          <button
            type="button"
            onClick={() => {
              navigate(NonAuthRoutes.landingPage);
            }}
          >
            <DeliverycogLogoMobile className="ml-6 mt-[20px]" />
            {/* <CitroneLogo className="" /> */}
          </button>
        </div>
      </div>
    );
  };
  return (
    <div>
      {largeScreenHeader()}
      {smallScreenHeader()}
    </div>
  );
}

export default Header;
