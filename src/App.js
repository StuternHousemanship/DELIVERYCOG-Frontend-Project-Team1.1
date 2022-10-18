import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>An interstate delivery platform</p>
        <p>
          This platform allows people to send items to other geographical states
          through individuals traveling to those destinations.
        </p>
      </header>
    </div>
  );
}

export default App;
