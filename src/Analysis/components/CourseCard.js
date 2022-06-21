import { Button, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CourseCard = ({courseName}) => {
  return (
    <Wrapper style={{ boxShadow: "rgb(0 0 0 / 85%) 0px 4px 16px" }}>
      <Card>
        <div style={{borderRadius: '0.5rem',height:"13rem"}} >
          <img style={{borderRadius: '0.5rem',height:"100%",width:"100%"}}
            src="https://practice.geeksforgeeks.org/_next/image?url=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fimg-practice%2Fbanner%2Fcomplete-interview-preparation-thumbnail.png&w=1920&q=75"
            alt=""
          />
        </div>
        <CardInfo>
          <Typography variant="h6" color="white" fontSize={16}>
            {courseName}
          </Typography>
          <div style={{display:'flex', alignItems:'flex-end'}}>
            <div style={{marginTop:'1rem',flex:"1"}}>
              <Typography
                variant="h6"
                style={{ textDecoration: "line-through", color: "#ADADAD",fontSize:"1rem" }}
              >
                ₹ 6000
              </Typography>
              <Typography variant="h6" style={{ color: "#ffbe37" }}>
                ₹ 3000
              </Typography>
            </div>
            <div >
              <Button
                variant="contained"
                style={{ textTransform: "none", backgroundColor: "#0259eb" }}
              >
                Explore
              </Button>
            </div>
          </div>
        </CardInfo>
      </Card>
    </Wrapper>
  );
};

const Card = styled.div`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background: #111229;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;

  img {
    width: 100%;
  }
`;
const CardInfo = styled.div`
  padding: 0.81rem;
`;
const Wrapper = styled.div`
  border-radius: 0.5rem;
  position: relative;
  width: 20rem;
  height: 25.5rem;
  margin-bottom: 2rem;
  background: linear-gradient( 163.41deg, rgb(17 18 41) 20.11%, rgb(0 0 0) 171.59% );
`;
export default CourseCard;