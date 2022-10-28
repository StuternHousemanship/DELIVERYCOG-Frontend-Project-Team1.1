import React from "react";
import "./App.css";
// import {Routes, Route} from 'react-router-dom';
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
import Login from "pages/Login";

function App() {
  return (
    <div className="">
      <div className="">
        {/* <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes> */}
        <Login />
      </div>
    </div>
  );
}

export default App;
