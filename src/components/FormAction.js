import React from "react";

function FormAction({
  handleSubmit,
  type = "button",
  action = "submit",
  text = "Continue",
}) {
  return (
    <div className="flex-col items-center">
      {type === "button" ? (
        <button
          onClick={handleSubmit}
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
        >
          {text}
        </button>
      ) : (
        <></>
      )}

      <div className="">
        <a href="#" className="">
          Log into an existing account
        </a>
      </div>
    </div>
  );
}

export default FormAction;
