import React from "react";
import "./textStyle.css";
import styled from "styled-components";
import { device } from "../../ResponsiveData/DeviceData";
function List() {
  return (
    <Para>

    <p className="para">
      Not just a coding school, but a complete placement ecosystem with strong
      emphasis on high quality placement training & support, not only equipping
      you with relevant job market skills but providing every help to land your
      dream job.
    </p>
    </Para>
  );
}

export default List;

const Para = styled.div`
color:white;
  @media ${device.mobileL} {

      max-width: 1rem;
      color:white

  }
`;
