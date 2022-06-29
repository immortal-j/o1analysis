import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wrapper:{
        width: "80%",
        margin: "0 auto"
    },
  mar: {
    marginTop: "2%",    
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mar2: {
    marginTop: "6%",
 
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  imgBig: {
    width: "100%",
  },
  imgSmall: {
   width: "100%",
    
  },
}));

export default function Combo() {
  const classes = useStyles();

  return (
    <div onClick={() => window.open("combo", "_blank")} className={classes.wrapper}>
      <div className={classes.mar}>
        <img src="Banner.jpeg" className={classes.imgBig} />
      </div>

      <div className={classes.mar2}>
        <img src="combo_mid.png" className={classes.imgSmall} />
        <img src="combo_left.png" className={classes.imgSmall} />
        <img src="combo_right.png" className={classes.imgSmall} />
      </div>
    </div>
  );
}
