import React from "react";
import Image1 from "./asserts/images/Middle.png";
import logo from "./asserts/images/logo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image3 from "./asserts/images/WeGotYou.png";
import Image4 from "./asserts/images/OurClients.png";
import Image5 from "./asserts/images/Middle-media.png";

import "./App.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const App: React.FC = () => {
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="image-container">
            <div>
              <img
                src={Image1}
                alt=""
                className="a-img"
                style={{ margin: "94px 40px" }}
              />
            </div>
            <div className="media-img">
              <img src={Image5} alt="" />
            </div>
          </div>

          <div>
            <img src={Image3} alt="" className="weGoYou" />
          </div>
          <div>
            <img src={Image4} alt="" className="ourClients" />
          </div>
        </Slider>
      </div>
      <div className="wrapper-two">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="content">
          <h4 style={{ color: "#E8E8E8" }}>hello@aadu.agency</h4>
          <h5 style={{ color: "#F0F0F0" }}>6/170, Thotiyankadu, 639136 IN</h5>
        </div>
      </div>
    </>
  );
};

export default App;
