import React from "react";
import Feature from "../components/Features/Feature";
import Testislider from "../components/Testimonial_slider/TestiSlider";
import Home from "../components/Home/Home";
import FooterNew from "../components/Footer/FooterNew";
import Combo from "../components/Combo";

const Homepage = () => {
  return (
    <>
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
          scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        <Home />
        <Feature />
        <Testislider />
        <Combo/>
        <FooterNew/>
      </div>
    </>
  );
};

export default Homepage;
