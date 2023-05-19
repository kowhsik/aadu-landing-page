import React from "react";
import Image1 from "./asserts/images/Frame 2 1.svg";
import Image2 from "./asserts/images/Coming Soon.svg";
import logo from "./asserts/images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-one">
          <img src={Image1} alt="" className="a-img" />
          <img src={Image2} alt="" className="comin-soon-img" />
        </div>
        <div className="wrapper-two">
          <img src={logo} alt="" />
          <div className="content">
            <h4>hello@aadu.agency</h4>
            <h4>6/170, Thotiyankadu, 639136 IN</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
