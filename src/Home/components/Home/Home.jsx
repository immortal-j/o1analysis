import React from "react";
import Navbar from "../Navbar";
import SocialMedia from "../SocialMedia";
import Main from "../TextContent/Main";
import image from "../../images/star.png";
import bg_final from "../../images/bg_final.png";
const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: { bg_final },
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <Navbar />
        <Main />
       
        {/* Main content contains Start btn, modal, form */}
        <SocialMedia />
      </div>
    </>
  );
};

export default Home;
