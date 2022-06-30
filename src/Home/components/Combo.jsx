import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wrapper:{
        width: "90%",
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
  marginBottom:"2rem",
    borderRadius:"10px",
  },
  imgSmall: {
   width: "100%",
    
  },
}));

export default function Combo() {
  const classes = useStyles();

  return (
    <div  className={classes.wrapper}>
      <div className={classes.mar}>
        <img src="banner.png" className={classes.imgBig} />
      </div>

      <div className={classes.mar2}>
        <img src="combo_mid.png" className={classes.imgSmall} />
        <img src="combo_left.png" className={classes.imgSmall} />
        <img src="combo_right.png" className={classes.imgSmall} />
      </div>
    </div>
  );
}
