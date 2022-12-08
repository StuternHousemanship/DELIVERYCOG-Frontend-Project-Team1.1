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

  const [
    isForgotPasswordRequestMobileSuccessful,
    setIsForgotPasswordRequestMobileSuccessful,
  ] = useState(false);

  /* handle Forgot Password Button */
  const handleForgotPasswordButton = () => {
    setIsForgotPasswordRequestSuccessful(true);
  };

  const handleForgotPasswordMobileButton = () => {
    setIsForgotPasswordRequestMobileSuccessful(true);
  };

  /* displays Forgot Password Layout */
  const forgotPasswordLayout = () => {
    return (
      <div className="hidden md:block lg:block">
        <nav className="fixed w-full">
          <Header />
        </nav>
        <div className="sm:h-[100vh] sm:w-screen sm:bg-[#FFFFFF] flex justify-center items-center xs:w-[428px] xs:h-[900px] xs:bg-white">
          <div className="bg-white rounded-[5px] p-5 border-[2px] border-[#16D176] sm:w-[700px] sm:h-[700px] xs:w-full xs:h-full relative">
            <div className="sm:top-[4px] sm:left-[80px] xs:top-[335px] xs:left-[45px] mb-[40px]">
              <h1 className="text-[#424242] font-Inter font-[700] text-[30px] sm:top-[470px] leading-[44px] mt-5 xs:top-[680px] text-center">
                Forgot Password?
              </h1>
            </div>

            <div className="flex justify-center items-center">
              <p className="text-[#424242] xs:w-[349px] sm:w-[418px] text-[17px] text-center leading-[19.36px] sm:top-[200px] sm:left-[80px] xs:top-[350px] xs:left-[45px] mb-[40px]">
                Enter the email address you use on DeliveryCOG. We&apos;ll send
                a link to reset your password.
              </p>
            </div>
            <form className="flex justify-center items-center sm:top-[600px] xs:top-[750px] mb-[40px]">
              <label className="" htmlFor="email">
                <p className="text-[#424242] text-[16px] sm:font-[650] leading-[16px] mb-[6px] ">
                  Email
                </p>

                <input
                  type="email"
                  id="mail"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className=" p-3 sm:w-[450px] xs:w-[348px] h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0"
                />
              </label>
            </form>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className=" xs:w-[348px] sm:w-[450px]  h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0 bg-[#16D176] text-white font-sans text-[20px] leading-[23px] font-[400] absolute sm:top-[405px] xs:top-[705px] mb-2"
                onClick={() => handleForgotPasswordButton()}
              >
                Continue
              </button>

              <button
                type="submit"
                className=" xs:w-[348px] sm:w-[450px]  h-[56px] rounded-[5px] border-[2px] border-[#16D176] outline-0 text-black font-sans  text-[20px] leading-[23px] font-[400] absolute sm:top-[475px] xs:top-[775px]"
                onClick={() => navigate(NonAuthRoutes.logIn)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* displays Forgot Password Success Layout */
  const forgotPasswordSuccessLayout = () => {
    return (
      <div className="hidden md:block lg:block">
        <nav className="fixed w-full">
          <Header />
        </nav>
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

            <button
              type="button"
              className="text-[#424242] xs:w-[349px] sm:w-[418px] text-[16px] outline-0 leading-[19.36px] absolute sm:top-[560px] sm:left-[80px] xs:top-[760px] xs:left-[45px] mb-[40px] text-center"
              onClick={() => navigate(NonAuthRoutes.logIn)}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    );
  };

  // displays mobile screen
  const forgotPasswordLayoutMobile = () => {
    return (
      <div className="md:hidden lg:hidden">
        <nav className="fixed w-full">
          <Header />
        </nav>
        <div className="sm:h-[100vh] sm:w-screen sm:bg-[#FFFFFF] flex justify-center items-center xs:w-[428px] xs:h-[900px] xs:bg-white">
          <div className="bg-white rounded-[5px] p-5 border-[2px] border-[#16D176] sm:w-[700px] sm:h-[700px] xs:w-full xs:h-full relative">
            <div className="sm:top-[4px] sm:left-[80px] xs:top-[335px] xs:left-[45px] mb-[40px]">
              <h1 className="text-[#424242] font-Inter font-[700] text-[30px] sm:top-[470px] leading-[44px] mt-5 xs:top-[680px] text-center">
                Forgot Password?
              </h1>
            </div>

            <div className="flex justify-center items-center">
              <p className="text-[#424242] xs:w-[349px] sm:w-[418px] text-[17px] text-center leading-[19.36px] sm:top-[200px] sm:left-[80px] xs:top-[350px] xs:left-[45px] mb-[40px]">
                Enter the email address you use on DeliveryCOG. We&apos;ll send
                a link to reset your password.
              </p>
            </div>
            <form className="flex justify-center items-center sm:top-[600px] xs:top-[750px] mb-[40px]">
              <label className="" htmlFor="email">
                <p className="text-[#424242] text-[16px] sm:font-[650] leading-[16px] mb-[6px] ">
                  Email
                </p>

                <input
                  type="email"
                  id="mail"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className=" p-3 sm:w-[450px] xs:w-[348px] h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0"
                />
              </label>
            </form>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className=" xs:w-[348px] sm:w-[450px]  h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0 bg-[#16D176] text-white font-sans text-[20px] leading-[23px] font-[400] absolute sm:top-[405px] xs:top-[705px] mb-2"
                onClick={() => handleForgotPasswordMobileButton()}
              >
                Continue
              </button>

              <button
                type="submit"
                className=" xs:w-[348px] sm:w-[450px]  h-[56px] rounded-[5px] border-[2px] border-[#16D176] outline-0 text-black font-sans  text-[20px] leading-[23px] font-[400] absolute sm:top-[475px] xs:top-[775px]"
                onClick={() => handleForgotPasswordMobileButton()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // display success mobile view
  const forgotPasswordSuccessLayoutMobile = () => {
    return (
      <div className="md:hidden lg:hidden">
        <nav className="fixed w-full">
          <Header />
        </nav>
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

            <button
              type="button"
              className="text-[#424242] xs:w-[349px] sm:w-[418px] text-[16px] outline-0 leading-[19.36px] absolute sm:top-[560px] sm:left-[80px] xs:top-[760px] xs:left-[45px] mb-[40px] text-center"
              onClick={() => navigate(NonAuthRoutes.logIn)}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {isForgotPasswordRequestSuccessful
        ? forgotPasswordSuccessLayout()
        : forgotPasswordLayout()}
      {isForgotPasswordRequestMobileSuccessful
        ? forgotPasswordSuccessLayoutMobile()
        : forgotPasswordLayoutMobile()}
    </div>
  );
}

export default ForgotPassword;
