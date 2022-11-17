import React from "react";
import { ReactComponent as MaskDelivery } from "./assets/svg/hand-mask-delivery-icon.svg";
import { ReactComponent as BikeDelivery } from "./assets/svg/bike-delivery-icon.svg";

function Footer() {
  /** global footerIcons */
  /* eslint no-undef: "error" */
  const footerIcons = () => {
    return (
      <div className="flex justify-between">
        <MaskDelivery />
        <BikeDelivery />
      </div>
    );
  };
  return <div>{footerIcons()}</div>;
}

export default Footer;
