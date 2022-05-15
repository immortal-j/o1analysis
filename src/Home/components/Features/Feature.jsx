import React from "react";
import { Box, Grid } from "@mui/material";
import StackbarGraph from "../../../Analysis/components/StackbarGraph";

const FeaturePosition = {
  position: "relative",
  top: "100vh",
};

const gridStyle = {
  height: "8vh",
  margin: " 20rem 0",
};

const reverseCol_inMobileView = {
  // '@media (max-width: 780px)' : {
  
  //   order:-1,
  // }
}
const reverseCol_inMobileView2 = {
  // '@media (max-width: 780px)' : {
  //   order:1,
  // }
}
const FeatureSection = () => {
  return (
    <>
      <Box sx={FeaturePosition}>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "3em",
            marginBottom: "1em",
          }}

        >
          Features
        </h1>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            {/* <StackBarGraph /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ backgroundColor: "red" }}>
            <Box sx={{ height: "max-content", backgroundColor: "red" }}>
              <p style={{ padding: "8em 2em" }}>
                Superiority derive gains will christianity law war contradict
                prejudice mountains derive. Insofar superiority marvelous
                deceptions grandeur decieve decieve. Superiority ultimate
                superiority morality grandeur value dead battle eternal-return
                salvation noble ascetic. Oneself battle inexpedient ascetic self
                transvaluation of salvation inexpedient right holiest. Disgust
                ultimate convictions morality philosophy snare grandeur.
              </p>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} sx={{ backgroundColor: "blue" }}>
            <Box sx={{ height: "max-content" }}>
              <p>
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
          <Grid item xs={12} sm={12} md={6} style={reverseCol_inMobileView}>
            {/* <StackBarGraph /> */}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} >
            {/* <StackBarGraph /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ backgroundColor: "red" }}>
            <Box>
              <p>
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
      </Box>
    </>
  );
};

export default FeatureSection;
