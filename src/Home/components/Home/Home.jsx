import React from "react";
import Navbar from "../Navbar";
import SocialMedia from "../SocialMedia";
import Main from "../TextContent/Main";
import bg_final from "../../images/bg_homepage.png";
const Home = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage:  "url(" + bg_final + ")",
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
