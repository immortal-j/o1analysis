import { Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import React from "react";
import './Banner.css'
import women from '../Assets/women.png'
import logo from "../Assets/Logo/logo2.svg";
import ds from "../Assets/ds.jpg";

const Banner = () => {
  return (
//     <Container
//       maxWidth={"xl"}
//       style={{
//         marginTop: "1rem",
//         background: "#10153b",
//         padding: 0,
//         overflow: "hidden",
//         display: "flex",
//       }}
//     >
//       <C2>
//         <C1>
//           <ImgBox>
//             <img src={ds} alt="" />
//           </ImgBox>
//         </C1>
//       </C2>
//       <TextArea>
//         <Typography variant="h4" color="white">
//           Data Structure Course
//         </Typography>
//         <Typography variant="body1" color="white">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
//           eligendi.
//         </Typography>
//       </TextArea>
//       {/* <LogoBox>
//         <img src={logo} alt="" />
// <Button>Join Now!</Button>
//       </LogoBox> */}
      
//     </Container>
    <div>
    <div className="banner-container">
      <div className="banner">
        <div className="shoe">
          <img src={ds} alt="" />
        </div>
        <div className="content">
          <span>upto</span>
          <h3>50% 0ff</h3>
          <p>offer ends after 5 days</p>
          <a href="#" className="btn">
            veiw offer
          </a>
        </div>
        <div className="women">
          <img src={women}alt="" />
        </div>
      </div>
    </div>
  </div>
  );
};
const LogoBox = styled.div`
  img {
    width: 3rem;
  }
`;

const TextArea = styled.div`
  margin-left: 5rem;
  width: 30rem;
`;
const ImgBox = styled.div`
  position: absolute;
  right: 3rem;
  width: 100%;
  height: 100%;
  background-color: #0d4fdb;
  border-radius: 0 10rem 10rem 0;

  img {
    position: absolute;
    right: 3rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* border-radius: 15px 122px 122px 0px / 0px 70px 81px 0px; */
    border-radius: 0 10rem 10rem 0;
  }
`;
const C1 = styled.div`
  position: relative;
  background-color: #1b8bd0;
  border-radius: 0 10rem 10rem 0;
  width: 100%;
  height: 100%;
`;
const C2 = styled.div`
  width: 25rem;
  height: 10rem;
`;

export default Banner;
