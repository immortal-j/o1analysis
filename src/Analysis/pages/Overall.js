import React from "react";
import styled from "styled-components";
import GraphWrapper from "../components/GraphWrapper";
import SideBar from "../components/Sidebar/SideBar";
import Linegraph from "../components/Linegraph";
export const Overall = () => {
  return (
    <Wrapper>
      <SideBar />
      <MainContain>
        <div className="Container">
          <div className="user">
            <h2>
              <strong>Hello,</strong> <span>Pratik</span>
            </h2>
          </div>
          <GraphWrapper />
        </div>
      </MainContain>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const MainContain = styled.div`
  width: 100vw;
  padding: 1.52rem;
  height: 100vh;
  .Container {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    /* background-color: #252733; */
  }
  .user {
    padding: 1rem;
    h2 {
      font-size: 2.5rem;
      color: white;
      span {
        color: #6d57cf;
      }
    }
  }
`;
