import React from "react";
import Feature from "../components/Features/Feature";
import Testislider from "../components/Testimonial_slider/TestiSlider";
import Home from "../components/Home/Home";
import FooterNew from "../components/Footer/FooterNew";
import Courses from "../components/Courses";

const Homepage = () => {
  return (
    <>
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
          // backgroundImage:{image_star},
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        <Home />
        <Feature />
        <Testislider />
        <Courses/>
        <FooterNew/>
      </div>
    </>
  );
};

export default Homepage;
