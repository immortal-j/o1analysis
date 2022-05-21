import React from "react";
import "./textStyle.css";
import styled from "styled-components";
import { device } from "../../ResponsiveData/DeviceData";
import { Typography } from "@mui/material";
function List() {
  return (

    <Typography className="para">
      Not just a coding school, but a complete placement ecosystem with strong
      emphasis on high quality placement training & support, not only equipping
      you with relevant job market skills but providing every help to land your
      dream job.
    </Typography>

  );
}

export default List;

