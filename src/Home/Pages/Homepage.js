import React from "react";
import Feature from "../components/Features/Feature";
import Footer from "../components/Footer/Footer";
import Testislider from "../components/Testimonial_slider/TestiSlider";
import Home from "../components/Home/Home";
import FooterNew from "../components/Footer/FooterNew";
const Homepage = () => {
  return (
    <>
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
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
        {/* <Footer /> */}
        <FooterNew/>
      </div>
    </>
  );
};

export default Homepage;
