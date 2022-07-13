import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //   subheader: {
  //     color: "#000",
  //     fontSize: "15px",
  //   },
  //   root: {
  //     minWidth: 320,
  //     minHeight: 320,
  //     transition: "0.3s all ease-in-out",
  //     "&:hover": {
  //       marginTop: "-10px",
  //     },
  //     marginBottom: "8px",
  //   },
  //   media: {
  //     height: 0,
  //     paddingTop: "56.25%", // 16:9
  //   },
  //   expand: {
  //     transform: "rotate(0deg)",
  //     marginLeft: "auto",
  //     transition: theme.transitions.create("transform", {
  //       duration: theme.transitions.duration.shortest,
  //     }),
  //   },
  //   expandOpen: {
  //     transform: "rotate(180deg)",
  //   },
  //   typo: {
  //     color: "#22577A",
  //     fontSize: "15px",
  //   },
  //   personName: {
  //     fontSize: "20px",
  //     color: "#2A0944",
  //     [theme.breakpoints.up("sm")]: {
  //       fontSize: "25px",
  //     },
  //   },
  //   avatar: {
  //     resize: "contain",
  //     height: "60px",
  //     width: "60px",
  //   },
}));

export default function UserCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [visible, setvisible] = React.useState("inline");
  const handleExpandClick = () => {
    setvisible("none");
  };
  const handlecontract = () => {
    setvisible("inline");
  };
  return (
    <div>
      <img />
      <Card
        className={classes.root}
        style={{ backgroundColor: "#FFAA4C", color: "#fff" }}
        elevation={3}
      >
        <CardHeader
          avatar={
            <Avatar
              aria-label="image"
              className={classes.avatar}
              src={"rohitdoshi.jpg"}
            ></Avatar>
          }
          title={
            <Typography className={classes.personName}>Rohit Doshi</Typography>
          }
          subheader={
            <Typography
              className={classes.typo}
              color="textSecondary"
              fontSize="29px"
            >
              SDE @ Amazon
            </Typography>
          }
        />
        <CardContent>
          <Typography
            variant="body2"
            component="p"
            className={classes.subheader}
          >
            Random
            <Button
              onClick={handleExpandClick}
              style={{
                display: `${visible}`,
                color: "#5089C6",
                fontFamily: "sans-serif",
              }}
              variant="body2"
              component="p"
            >
              See More
            </Button>
            <Typography
              style={{ display: `${visible === "none" ? "inline" : "none"}` }}
              variant="body2"
              component="p"
              className={classes.subheader}
            >
              Bullshit
            </Typography>
            <Button
              onClick={handlecontract}
              style={{
                display: `${visible === "none" ? "inline" : "none"}`,
                color: "#5089C6",
              }}
              variant="body2"
              component="p"
            >
              See Less
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
