import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import forgotImage from "../assets/Images/HandsGive.png";
import Header from "../header";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [
    isForgotPasswordRequestSuccessful,
    setIsForgotPasswordRequestSuccessful,
  ] = useState(false);

  /* handle Forgot Password Button */
  const handleForgotPasswordButton = () => {
    setIsForgotPasswordRequestSuccessful(true);
  };

  /* displays Forgot Password Layout */
  const forgotPasswordLayout = () => {
    return (
            <><p className="text-[#424242] text-[16px] sm:font-[650] leading-[16px] mb-[6px] ">
        Email
      </p><input
          type="email"
          id="mail"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className=" p-3 sm:w-[450px] xs:w-[348px] h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0  " /><div>
          <button
            type="submit"
            className=" xs:w-[348px] sm:w-[450px]  h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0 bg-[#16D176] text-white font-sans text-[20px] leading-[23px] font-[400] absolute sm:top-[365px] sm:left-[80px] xs:top-[655px] xs:left-[40px] mb-2"
            onClick={() => handleForgotPasswordButton()}
          >
            Continue
          </button>

          <button
            type="submit"
            className=" xs:w-[348px] sm:w-[450px]  h-[56px] rounded-[5px] border-[2px] border-[#16D176] outline-0 text-black font-sans text-[20px] leading-[23px] font-[400] absolute sm:top-[435px] sm:left-[80px] xs:top-[735px] xs:left-[40px] "
            onClick={() => handleForgotPasswordButton()}
          >
            Cancel
          </button>
        </div></>
        </form>
      </div>
    );
  };

  /* displays Forgot Password Success Layout */
  const forgotPasswordSuccessLayout = () => {
    return (
      <div className="sm:h-[100vh] sm:w-screen sm:bg-[#FFFFFF] flex justify-center items-center xs:w-[428px] xs:h-[900px] xs:bg-white  ">
        <div className="bg-white rounded-[5px] border-[2px] border-[#16D176] sm:w-[600px] sm:h-[650px] xs:w-full xs:h-full relative">
          <div className="w-[100%] flex justify-center">
            <img
              src={forgotImage}
              alt="forgotImage"
              className="w-[200px] h-[180px] -mt-0.98 "
            />
          </div>
          <div className="sm:top-[4px] sm:left-[80px] xs:top-[335px] xs:left-[45px] mb-[40px]">
            <h1 className="text-[#424242] font-Inter font-[700] text-[30px] sm:top-[470px] leading-[44px] mt-5 xs:top-[680px] text-center">
              Check Your Inbox
            </h1>
          </div>
          <p className="text-[#424242] text-center xs:w-[349px] sm:w-[435px] text-[17px] leading-[19.36px] absolute sm:top-[280px] sm:left-[80px] xs:top-[500px] xs:left-[45px] mb-[40px] ">
            We just sent alog in link to name@email.com. The link will expire
            shortly.
          </p>
          <button
            type="submit"
            className=" xs:w-[338px] sm:w-[450px] xs:h-[42px] sm:h-[56px] rounded-[4px] border-[1px] outline-0 bg-[#16D176] text-white font-sans text-[20px] leading-[23px] font-[400] absolute sm:top-[420px] sm:left-[80px] xs:top-[720px] xs:left-[45px] "
            onClick={() => navigate(NonAuthRoutes.logIn)}
          >
            Resend email
          </button>

          <p className="text-[#424242] xs:w-[349px] sm:w-[418px] text-[17px] text-center leading-[19.36px] absolute sm:top-[500px] sm:left-[80px] xs:top-[750px] xs:left-[45px] mb-[40px] ">
            Can&apos;t find your link. Check your spam folder.
          </p>

          <p className="text-[#424242] xs:w-[349px] sm:w-[418px] text-[16px] leading-[19.36px] absolute sm:top-[560px] sm:left-[80px] xs:top-[760px] xs:left-[45px] mb-[40px] text-center ">
            Go back
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {isForgotPasswordRequestSuccessful
        ? forgotPasswordSuccessLayout()
        : forgotPasswordLayout()}
      {
        // isForgotPasswordRequestMobileSuccessful
        // ? forgotPasswordSuccessLayoutMobile()
        // : forgotPasswordLayoutMobile()
      }
    </div>
  );
}

export default ForgotPassword;
