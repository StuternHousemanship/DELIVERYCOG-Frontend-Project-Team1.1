/* eslint-disable import/no-cycle */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NonAuthRoutes } from "url";
import Header from "../../header";
import { ReactComponent as SuccessIcon } from "../../assets/svg/successIcon.svg";
import { ReactComponent as SuccessIconMobile } from "../../assets/svg/successIconMobile.svg";
import onboarding from "../../api/onboarding";

function VerifyEmailSuccess() {
  const navigate = useNavigate();

  const { userId } = useParams();
  console.log("URL parameter User Id is =", userId);

  /** Handles The Sign Up Button */
  // eslint-disable-next-line no-unused-vars
  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);
    try {
      await onboarding.VerifyEmail(userId).then((response) => {
        if (response.status === 200) {
          // setButtonIsLoading(false);
        }
      });
    } catch (error) {
      // setButtonIsLoading(false);
      // navigate(NonAuthRoutes.createAccountErrorLayout);
    }
  };

  // /** Create Account Error Layout */
  const verifyEmailSuccess = () => {
    return (
      <div>
        {/** Large screen */}
        <div className="hidden md:block lg:block">
          <Header />
          <div className="flex justify-center items-center">
            <div className="my-[90px] h-[470px] w-[624px] bg-white  rounded-xl border-[#092C4C] border-[1px]">
              <SuccessIcon className=" mx-[250px] mt-[50px] w-[88.89px] h-[88.89px] flex justify-center items-center" />
              <h1 className=" mx-[160px]  w-[320px] h-31  mt-10 font-Inter  font-[900] text-[26px] leading-10  text-[#333333]">
                Verification Successful
              </h1>
              <p className=" ml-[110px] mt-10 text-[#6D6464] text-[20px]">
                You have successfully verified your email
              </p>
              <button
                type="submit"
                title="verify-email"
                className=" ml-[72px]  bg-[#12AE62] w-[496px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
                onClick={() => navigate(NonAuthRoutes.logIn)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const verifyEmailSuccessMobile = () => {
    return (
      <div>
        {/** Small screen */}
        <div className="sm:block md:hidden lg:hidden w-[390px] h-[844px]">
          <Header />
          <div className="flex justify-center items-center">
            <div className="my-[30px] h-[405px] w-[390px] bg-white">
              <h1 className=" mx-[100px] w-[294px] h-[30px] font-Inter  font-[700] text-[20px] leading-10  text-[#333333] text-center">
                Verification Successful
              </h1>
              <SuccessIconMobile className=" mx-[200px] mt-[50px] w-[88.89px] h-[88.89px] flex justify-center items-center" />
              <p className=" ml-[72px] mt-10 text-[#6D6464] text-center">
                You have successfully verified your email
              </p>
              <button
                type="submit"
                title="verify-email"
                className=" ml-[72px]  bg-[#12AE62] w-[342px] h-14  rounded text-white  leading-5 text-sm font-semibold mt-[40px]"
                onClick={() => navigate(NonAuthRoutes.logIn)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {verifyEmailSuccess()}
      {verifyEmailSuccessMobile()}
    </div>
  );
}

export default VerifyEmailSuccess;
