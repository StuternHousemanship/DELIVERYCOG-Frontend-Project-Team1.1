import { React, useState } from "react";
// import { ReactComponent as DeliverycoglogoMobile } from "../../assets/svg/delivery-cog-logo-mobile.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/hamburger-icon.svg";
import { ReactComponent as CrossIcon } from "../../assets/svg/cross-icon.svg";

function addATripHamburgerHeader() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // initiate isNavbarOpen state with false
  /** handle isNavbarOpen state on click */
  const handleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <div>
      <nav className="flex  justify-between">
        <div className="mx-6 my-5">
          <h3 className="text-xl font-[700] text-[#282828]">Add a trip</h3>
          <p className="text-[#6D6464] text-sm mt-3">
            kindly provide the information below to help you add a trip
          </p>
        </div>
        <section className="MOBILE-MENU flex lg:hidden ">
          <div>
            <button
              type="submit"
              className="HAMBURGER-ICON space-y-2"
              onClick={() => handleNavbar()}
            >
              <MenuIcon className=" mt-[20px] mr-7" />
            </button>
          </div>
          {/* toggle class based on isNavbarOpen state */}
          <div className={isNavbarOpen ? "showMenuNav" : "hideMenuNav"}>
            <div>
              <button
                type="submit"
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavbarOpen(false)} // change isNavbarOpen state to false to close the menu
              >
                <CrossIcon />
              </button>
            </div>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] mb-40">
              <li className="border-b border-gray-400 my-8 uppercase">Home</li>
              <li className="border-b border-gray-400 my-8 uppercase">
                Delivery
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">Trips</li>
              <li className="border-b border-gray-400 my-8 uppercase">
                Support
              </li>
            </ul>
          </div>
        </section>
      </nav>
      {/* style showMenuNav and hideMenuNav */}
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default addATripHamburgerHeader;
