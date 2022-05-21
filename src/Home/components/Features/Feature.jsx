import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Stackbargraph from "../../../Analysis/components/Stackbargraph";
import Data from "../../../Analysis/redux/DummyData/Data";
import LineGraph from "../../../Analysis/components/LineGraph";
import PieChart from "../../../Analysis/components/PieChart";

const FeaturePosition = {
  color: "white",
  marginBottom: "4rem",
};
const FeatureParagraph = {
  background: "-webkit-linear-gradient(38deg, #ffffff, #c5c5c5, #4e4747)",
  WebkitBackgroundClip: "text",
  // webkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: "8em 2em",
  fontSize: "19px",
}
const gridStyle = {
  height: "8vh",
  margin: " 20rem 0",
};

const gridOrder = { order: "-1" };

const FeatureSection = () => {
  const chartData = Data[0].stackgraph;
  return (
    <>
      <Container maxWidth="lg" style={FeaturePosition}>
        <Typography variant="h2"
          gutterBottom={'true'}
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Features
        </Typography>
        <Grid container alignItems={"center"} spacing={5}>
          <Grid item xs={12} sm={12} md={5}>
            <Stackbargraph byId={Data} />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box sx={{ height: "max-content" }}>
              <Typography variant="body1" gutterBottom={"true"} style={FeatureParagraph}>
                Superiority derive gains will christianity law war contradict
                prejudice mountains derive. Insofar superiority marvelous
                deceptions grandeur decieve decieve. Superiority ultimate
                superiority morality grandeur value dead battle eternal-return
                salvation noble ascetic. Oneself battle inexpedient ascetic self
                transvaluation of salvation inexpedient right holiest. Disgust
                ultimate convictions morality philosophy snare grandeur.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems={"center"} spacing={5} wrap={"wrap-reverse"}>
          <Grid item xs={12} sm={12} md={7} order={{ md: 2, lg: 1 }}>
            <Box sx={{ height: "max-content" }}>
              <p style={FeatureParagraph}>
                Oneself transvaluation marvelous pinnacle burying chaos fearful
                transvaluation snare decieve eternal-return. Ideal battle joy
                sea madness holiest pinnacle selfish prejudice spirit.
                Christianity suicide mountains convictions transvaluation
                christianity war reason. Ultimate sexuality ideal derive
                inexpedient burying oneself transvaluation eternal-return noble
                self morality dead. Merciful derive of morality christian
                philosophy merciful disgust self good ascetic marvelous. Society
                truth salvation god joy of.
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ md: 1, lg: 2 }}>
            <LineGraph byId={Data} />
          </Grid>
        </Grid>
        <Grid container alignItems={"center"} spacing={5} >
          <Grid item xs={12} sm={12} md={5}>
            <PieChart byId={Data} />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box>
              <p style={FeatureParagraph}>
                Abstract decieve enlightenment zarathustra transvaluation
                superiority salvation of. Ultimate deceptions moral noble horror
                ocean strong war marvelous. War deceptions endless faith endless
                holiest. Overcome disgust grandeur madness justice war. Ocean
                convictions ubermensch joy decieve inexpedient morality free
                play abstract ideal oneself ubermensch. Pious ocean war moral
                convictions overcome revaluation aversion battle deceptions.
                Salvation against value battle noble ocean madness evil.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FeatureSection;
