import React from "react";
import "./textStyle.css";
import { Typography } from "@mui/material";
function List() {
  return (
    <Typography className="para">
      <Typography fontSize={"x-large"} fontWeight={"bold"}>
         Afraid of the upcoming placements?
      </Typography>
      Know-Your-Prep is a tool that helps you judge your preparation for placements.
	  Get detailed analysis of your strong and weak areas and see where you stand with our <b>Placement Readiness Score</b> and what to do next to succeed.
    </Typography>

  );
}

export default List;