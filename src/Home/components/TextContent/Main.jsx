import React from "react";
import Heading from "./Heading";
import Circle from "../Circle"
import List from "./List";
import "./textStyle.css";
import ModalForm from "../Modal/Modal";
import { Container, Grid } from "@mui/material";


function Main() {
  return (
    <Container maxWidth={"lg"} className="content" style={{ marginTop: "46px" }}>
      <Grid container alignItems={"center"} justifyContent={"center"} wrap={'wrap-reverse'}>
        <Grid item md={8} sm={7} xs={12} style={{ zIndex: "1" }}>
          <Heading />
          <List />
          <ModalForm />
        </Grid>
        <Grid item md={4} sm={5} xs={6}>
          <Circle />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
