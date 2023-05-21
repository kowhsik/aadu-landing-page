import React from "react";
import Image1 from "./asserts/images/Frame 2 1.svg";
import Image2 from "./asserts/images/Coming Soon.svg";
import logo from "./asserts/images/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

const slides = [
  {
    background: Image1,
  },
  {
    background: Image1,
  },
];

function App() {
  return (
    <>
      {/* <AnimatePresence mode="wait">
        {currentSlide === index && (
          <motion.div
            className="slide-card"
            key={index.toString()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="card-background"
              style={{ backgroundImage: `url(${slide.background})` }}
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 30 }}
            ></motion.div>
            <motion.div
              className="card-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
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
    </>
  );
}

export default App;
