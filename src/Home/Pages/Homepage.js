import React from "react";
import Circle from "../components/Circle";


import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";

import Main from "../components/TextContent/Main";
import img from "../images/orion-nebula-11107.png";
// import Testimonial from "../components/Testimonial/Testimonial"
import Feature from "../components/Features/Feature";
import Footer from "../components/Footer/Footer";
import Testislider from "../components/Testimonial_slider/TestiSlider";
import Home from "../components/Home/Home";
const Homepage = () => {
  
  return (
    <>
    
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
          // backgroundImage: `url(${img})`,
          backgroundSize: "cover",
 
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        {/* <Navbar />
        <Main />
        <SocialMedia />
        <Circle /> */}
        {/* <Testimonial/> */}

<Home/>
        <Feature/>
        <Testislider/>
        <Footer/>
      </div>

    </>
  );
};

export default Homepage;
