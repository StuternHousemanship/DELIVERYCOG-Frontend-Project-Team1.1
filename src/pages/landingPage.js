import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import logo from "../logo.svg";
import "../App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="my-4">An Interstate Delivery Platform</p>
        <p className="my-6 w-500 text-base">
          This platform allows people to send items to other geographical states
          through individuals traveling to those destinations.
        </p>
        <button
          type="button"
          title="Sign Up"
          className=" bg-purple-500 py-4 px-6 mt-6 rounded-md text-white text-sm"
          onClick={() => navigate(NonAuthRoutes.signUp)}
        >
          SIGN UP NOW!
        </button>
        <button
          type="button"
          title="Log In"
          className=" bg-purple-500 py-4 px-6 mt-6 rounded-md text-white text-sm"
          onClick={() => navigate(NonAuthRoutes.logIn)}
        >
          LOG IN
        </button>
      </header>
    </div>
  );
}

export default App;
