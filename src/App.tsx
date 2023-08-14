import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "./asserts/images/Middle.png";
import logo from "./asserts/images/logo.svg";
import Image3 from "./asserts/images/We've got you..png";
import Image4 from "./asserts/images/Our Clients (1).png";
import Image5 from "./asserts/images/Middle-media.png";
import Image6 from "./asserts/images/wegotyou2.png";
import Image7 from "./asserts/images/our-clients.png";
import { ReactComponent as VolumeIcon } from "./asserts/icons/volume-2.svg";
import { ReactComponent as MuteIcon } from "./asserts/icons/volume-x.svg";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  draggable: true,
  fade: true,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  touchThreshold: 100,
};

const App: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      if (!isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  useEffect(() => {
    const refreshPage = () => {
      window.location.reload();
    };

    const interval = setInterval(refreshPage, 60 * 1000); // Refresh every 1 minute

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);
  return (
    <>
      <div className="slider-container">
        <a href="https://bit.ly/45zwtTT" target="_blank" rel="noreferrer">
          <Slider {...settings}>
            <div className="image-container">
              <div>
                <img src={Image1} alt="" className="a-img" style={{ margin: "94px 40px" }} />
              </div>
              <div className="media-img">
                <img src={Image5} alt="" className="media-img" />
              </div>
            </div>

            <div className="image-container">
              <picture>
                <source media="(max-width:650px)" srcSet={Image6} />
                <img src={Image3} alt="Flowers" />
              </picture>
              {/* <img src={Image3} alt="" className="weGoYou" /> */}
              {/* <img src={Image6} alt="" className="weGot" /> */}
              {/* <img
              srcSet={`${Image3} 500w, ${Image6} 1000w`}
              className="weGoYou"
            /> */}
            </div>
            <div className="image-container">
              <picture>
                <source media="(max-width:650px)" srcSet={Image7} />
                <img src={Image4} alt="Flowers" />
              </picture>
              {/* <img src={Image4} alt="" className="ourClients" /> */}
              {/* <img src={Image7} alt="" className="clients" /> */}
            </div>
          </Slider>
        </a>
      </div>
      <div className="wrapper-two">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="content">
          <h4>
            <a style={{ color: "rgb(180,177,177)" }} href="mailto:freddy@aadu.agency">
              freddy@aadu.agency
            </a>
          </h4>
          <h5 style={{ color: "rgb(180,177,177)" }}>6/170, Thotiyankadu, 639136 IN</h5>
        </div>
      </div>

      <div className="audio">
        <audio ref={audioRef} autoPlay loop style={{ display: "none" }}>
          <source src={"/background.mp3"} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <button onClick={() => setIsMuted(!isMuted)}>
          {!isMuted ? <VolumeIcon /> : <MuteIcon />}
        </button>
      </div>
    </>
  );
};

export default App;
