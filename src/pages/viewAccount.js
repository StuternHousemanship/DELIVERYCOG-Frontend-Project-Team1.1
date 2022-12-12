import React from "react";
// import { useNavigate } from "react-router-dom";
import accountImage from "../assets/Images/accountImage.png";
import OnboardingHeader from "../components/header/onboardingHeader";
// import { AuthRoutes } from "../url";

function ViewAccount() {
  // const navigate = useNavigate();

  const viewAccountLargeScreen = () => {
    return (
      <div className="hidden md:block lg:block">
        <OnboardingHeader />
        <div className="bg">
          <div className="flex">
            <div>
              <img src={accountImage} alt="profileImage" className="" />
              <p>name</p>
              <p>job</p>
              <div>
                <button type="button" title="Change password">
                  Change Password
                </button>{" "}
                <br />
                <button type="button" title="Delete Account">
                  Delete Account
                </button>
              </div>
            </div>
            <div>
              <h1>Personal information</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div>{viewAccountLargeScreen()}</div>;
}
export default ViewAccount;
