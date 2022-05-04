import React from "react";
import styled from "styled-components";
import Leetcode from "./Leetcode";
import StackBarGraph from "./StackBarGraph";
import RoundScoreGraph from "./RoundScoreGraph";

const GraphWrapper = () => {
  return (
    <Wrapper>
      <div className="circle-stats">
        <RoundScoreGraph />
        <RoundScoreGraph />
        <RoundScoreGraph />
        <RoundScoreGraph />
      </div>
      <div className="Stackbar">
        <StackBarGraph />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .circle-stats {
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); */
    grid-template-columns: 12rem 12rem;
    align-self: flex-start;
    padding: 1rem;
    grid-gap: 2rem;
    div {
      flex: 1;
    }
  }
  .Stackbar{
    width: 40rem;
  }
`;

export default GraphWrapper;
