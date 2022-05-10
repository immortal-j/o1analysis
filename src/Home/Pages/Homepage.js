import React from "react";
import Circle from "../components/Circle";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";

import Main from "../components/TextContent/Main";
import img from "../images/orion-nebula-11107.png";
import Testimonial from "../components/Testimonial/Testimonial"


const Homepage = () => {
  
  return (
    <>
    
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
          // backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          minHeight: "1000vh",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        <Navbar />

        <Main />
        {/* Main content contains Start btn, modal, form */}

        <SocialMedia />
        <Circle />
        <Testimonial/>
      </div>
    </>
  );
};

export default Homepage;
