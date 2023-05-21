import React from "react";
import Image1 from "./asserts/images/Frame 2 1.svg";
import Image2 from "./asserts/images/Coming Soon.svg";
import logo from "./asserts/images/logo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image3 from "./asserts/images/WeGotYou.png";
import Image4 from "./asserts/images/OurClients.png";

import "./App.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function App() {
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={Image1} alt="" className="a-img" />
            <img src={Image2} alt="" className="comin-soon-img" />
          </div>
          <div>
            <img src={Image3} alt="" className="we go tou" />
          </div>
          <div>
            <img src={Image4} alt="" className="our Clients" />
          </div>
        </Slider>
      </div>
      {/* <div className="App">
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
      </div> */}
    </>
  );
}

export default App;
