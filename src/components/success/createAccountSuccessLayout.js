import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import Header from "../../header";
import SuccessIcon from "../../assets/svg/successIcon.svg";
import SuccessIconMobile from "../../assets/svg/successIconMobile.svg";

function CreateAccountSuccessLayout() {
  const navigate = useNavigate();
  /** Create Account Success Layout */
  const createAccountSuccessLayout = () => {
    return (
      <div>
        <div className="hidden md:block lg:block">
          <Header />
          <div className="flex justify-center items-center">
            <div className="my-[211px] mx-[426px] h-[446px] w-[588px] bg-white border-gray-200 border-2">
              <SuccessIcon className="mx-[238.11px] mt-[54.11px]" />
              <p className="mt-[39.11px] ml-[113px] font-Inter font-[400] text-2xl h-14 w-[400px] text-black text-center">
                Your account has successfully <br /> been created
              </p>
              <div className="mt-6 mx-6 w-[342] ">
                <button
                  id="button-3"
                  type="submit"
                  onClick={() => navigate(NonAuthRoutes.logIn)}
                  className=" mt-[72px] mb-[51px] py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] active:bg-[#12AE62] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  /** Create Account Success Layout Mobile */
  const createAccountSuccessLayoutMobile = () => {
    return (
      <div>
        <div className="sm:block md:hidden lg:hidden w-[390px] h-[844px]">
          <Header />
          <div className="flex justify-center items-center">
            <div className=" w-[390px] h-[405px] bg-white border-gray-200 border-2">
              <SuccessIconMobile className="ml-6 mt-12" />
              <p className="mt-[45.56px] mx-[51px] font-Inter font-[400] text-2xl h-14 w-[288px] text-black text-center">
                Your account has successfully <br /> been created
              </p>
              <div className="mt-10 mx-6 w-[342] h-10 ">
                <button
                  id="button-4"
                  type="submit"
                  onClick={() => navigate(NonAuthRoutes.logIn)}
                  className=" mb-[73px] py-2 px-2 font-sans font-[600] bg-[#16D176] hover:bg-[#3DD98D] active:bg-[#12AE62] text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {createAccountSuccessLayout()}
      {createAccountSuccessLayoutMobile()}
    </div>
  );
}

export default CreateAccountSuccessLayout;
