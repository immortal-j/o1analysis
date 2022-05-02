import React from "react";
import Leetcode from "../components/Leetcode";
import StackBarGraph from "../components/StackBarGraph";
import styled from "styled-components";

export const Overall = () => {
  return (
    <>
      {/* <Leetcode/>
      <StackBarGraph/> */}
      <Wrapper>
        <div className="user">
          <h2>
            <strong>Hello,</strong> <span>John</span>
          </h2>
        </div>
        <div className="stats">
          <p>Levelwise Solved Problem</p>
          <div className="levelwise-stats">
            <Leetcode />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
padding: 2rem ;
width: 100vw;
  .user {
    h2 {
      font-size: 2.3rem;
      span {
        font-weight: lighter;
      }
    }
  }
  .stats{
  
    .levelwise-stats{
    }
  }
`;
