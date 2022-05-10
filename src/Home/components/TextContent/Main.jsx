import React from "react";
import Heading from "./Heading";
import List from "./List";
import "./textStyle.css";
import ModalForm from "../Modal/Modal";
import styled from "styled-components";
import {device} from "../../ResponsiveData/DeviceData"


function Main() {
  return (
    <TextContent className="content">
      <Heading />
      <List />
      <ModalForm />
    </TextContent>
  );
}

export default Main;

const TextContent = styled.div`
  @media ${device.mobileL} {
    position: absolute;
    top: 70vh;
    
  }
`;
