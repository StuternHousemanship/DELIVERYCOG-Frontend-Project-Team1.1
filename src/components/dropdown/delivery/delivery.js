import React from "react";
// import AsyncSelect from "react-select/async";
import { ReactComponent as ToggleDownSmallIcon } from "../../../assets/svg/toggleSmall.svg";

function delivery() {
  // const [name, setNames] = useState(null);
  // const loadStates = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/");
  //     const datas = await response.json();
  //     const filter = datas.map((data) => data.name);
  //     setNames(filter);
  //   } catch (error) {
  //     // console.log("loadStates", error);
  //   }
  // };

  // useEffect(() => {
  //   loadStates();
  // }, []);

  return (
    <div className="hidden md:block lg:block">
      <div className="w-[1013px] flex flex-wrap">
        <div className="w-[491px] ">
          <p className="mt-6  text-sm text-[#282828] font-[400] text">
            Delivery state
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#b7b5b5] border-2 ">
            <p className="text-sm font-[400] text-[#282828] my-3 mx-4">State</p>
            <ToggleDownSmallIcon className="my-3 mr-[20.7px]" />
          </div>
        </div>
        <div className="w-[491px] ml-6">
          <p className="mt-6  text-sm text-[#282828] font-[400] text">
            Delivery city
          </p>
          <div className="dropDownBtn flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#b7b5b5] border-2 ">
            <p className="text-sm font-[400] text-[#282828] my-3 mx-4">City</p>
            <ToggleDownSmallIcon className="my-3 mr-[20.7px]" />
          </div>
        </div>
        <div className="w-[491px]">
          <p className="mt-2  text-sm text-[#282828] font-[400] text">
            Choose delivery address
          </p>
          <div className="flex justify-items-center">
            <input
              type="radio"
              name="Enter pickup address"
              id="pickUp"
              className="mt-[18px] w-[19.2px] h-[19.2px]  text-[#16D176]"
            />{" "}
            <span className="text-lato mt-[18px] ml-2 text-[400] text-sm text-[#000000]">
              Enter delivery address
            </span>
          </div>
          <input
            id="pickupAddress"
            type="pickupAddress"
            placeholder="Pickup Address"
            className="dropDownBtn px-4 py-[14px] flex justify-between items-center mt-[9px] w-full h-12 border-spacing-1 border-[#b7b5b5] border-2 "
          />
        </div>
        <div className="w-[491px] ml-6">
          <div className="flex justify-items-center mt-[30px]">
            <input
              type="radio"
              name="Enter pickup address"
              id="pickUp"
              className=" mt-[18px] w-[19.2px] h-[19.2px]  text-[#16D176]"
            />{" "}
            <span className="text-lato mt-[18px] ml-2 text-[400] text-sm text-[#000000]">
              Deliver to customers address
            </span>
          </div>
          <div>
            {" "}
            <p className="mt-2 text-lato text-sm text-[400] text-[#6D6464]">
              Items will be delivered to customers address
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default delivery;
