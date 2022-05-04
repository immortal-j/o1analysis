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
      <div className="bar-stats">
        <div className="stackbar">
          <StackBarGraph />
        </div>
        <div className="stackbar">
          <StackBarGraph />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  .circle-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
    padding: 1rem;
    div {
      flex: 1;
    }
  }
  .bar-stats {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-around;

    .stackbar {
      border-radius: 1rem;
      padding: 0.5rem;
      border: solid 0.1rem #ffa0ff;
    }
  }
`;

export default GraphWrapper;
