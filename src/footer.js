import React from "react";
import { ReactComponent as MaskDelivery } from "./assets/svg/hand-mask-delivery-icon.svg";
import { ReactComponent as BikeDelivery } from "./assets/svg/bike-delivery-icon.svg";

function Footer() {
  /** global footerIcons */
  /* eslint no-undef: "error" */
  const footerIcons = () => {
    return (
      <div className="sticky top-0 z-50">
        <MaskDelivery className="fixed bottom-0 left-0" />
        <BikeDelivery className="fixed bottom-0 right-0" />
      </div>
    );
  };
  return <div>{footerIcons()}</div>;
}

export default Footer;
