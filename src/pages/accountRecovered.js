import React from "react";

function AcctRecovered() {
  return (
    <div>
      <div className="hidden md:block lg:block">
        <div className="flex justify-center items-center">
          <div className="my-[71px] h-[436px] w-[609px] bg-white">
            <p className="my-12 ml-20 font-Inter font-[700] text-4xl text-black">
              Account Recovered!
            </p>
            <p className="my-12 ml-20 font-Inter">
              You have successfully confirmed and recovered your account!
            </p>
            <div className="mt-6 mx-20 w-[450] ">
              <button
                type="button"
                title="Continue"
                className="py-2 px-2 mt-11 font-sans font-[600] bg-deliverycog-grey-background2-color text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
              >
                <a href="/logIn">Log in</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden lg:hidden">
        <div className="flex justify-center items-center">
          <div className="h-[926px] w-[609px] bg-white">
            <p className="my-12 ml-20 font-Inter font-[700] text-4xl text-black">
              Account Recovered!
            </p>
            <p className="my-12 ml-20 font-Inter">
              You have successfully confirmed and recovered your account!
            </p>
            <div className="mt-6 mx-20 w-[450] ">
              <button
                type="button"
                title="Continue"
                className="py-2 px-2 mt-11 font-sans font-[600] bg-deliverycog-grey-background2-color text-deliverycog-white-text-color text-base h-14 w-full border rounded border-[#717171] appearance-none focus:outline-none"
              >
                <a href="/logIn">Log in</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AcctRecovered;
