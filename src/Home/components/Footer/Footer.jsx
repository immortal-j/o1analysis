import { Box, Container, Grid, Link } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


const LinkStyle = {
  textDecoration: "none",
  padding: " 10px 0",
  "& hover": {
    background: "#efefef",
  },
};

const Footer = () => {
  return (
    <footer style={{color:"white"}}>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} width="100vw">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} md={4}>
              <Box borderBottom={1}>Help</Box>

              <Box>
                <Link href="/" color="inherit" style={LinkStyle}>
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={LinkStyle}>
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={LinkStyle}>
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box borderBottom={1}>Account</Box>

              <Box>
                <Link href="/" color="inherit" style={LinkStyle}>
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={LinkStyle}>
                  Signup
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box borderBottom={1}>Socials</Box>
              <a
                style={LinkStyle}
                href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in"
                target="_blank"
              >
                <LinkedInIcon />
              </a>

              <a
                style={LinkStyle}
                href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in"
                target="_blank"
              >
                <TwitterIcon />
              </a>
              <a
                style={LinkStyle}
                href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in"
                target="_blank"
              >
                <InstagramIcon />
              </a>

              <a
                style={LinkStyle}
                href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in"
                target="_blank"
              >
                <YouTubeIcon />
              </a>
            </Grid>
          </Grid>

          <Box
            textAlign="center"
            pt={{ xs: 5, sm: 10, lg: 3 }}
            pb={{ xs: 5, sm: 0, lg: 1 }}
          >
            O(1) Analysis &#38; Statistics, &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
