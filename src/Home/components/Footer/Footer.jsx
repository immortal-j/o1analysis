import { Box, Container, Grid, Link } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';

const LinkStyle = {
  textDecoration: "none",
  padding: " 10px 0",
  color:"white",
  "&:hover": {
    backgroundColor: "#efefef",
    color:"black"
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
              <ChevronRightSharpIcon/>
                <Link href="/"  style={LinkStyle}>
                  Contact
                </Link>
              </Box>
              <Box>
              <ChevronRightSharpIcon/>
                <Link href="/"  style={LinkStyle}>
                  Support
                </Link>
              </Box>
              <Box>
              <ChevronRightSharpIcon/>
                <Link href="/"  style={LinkStyle}>
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
              <ChevronRightSharpIcon/>
                <Link href="/"  style={LinkStyle}>
                  Login
                </Link>
              </Box>
              <Box>
              <ChevronRightSharpIcon/>
                <Link href="/"  style={LinkStyle}>
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
                href="https://www.instagram.com/o1codingclub/?hl=en"
                target="_blank"
              >
                <InstagramIcon />
              </a>

              <a
                style={LinkStyle}
                href="https://www.youtube.com/channel/UCTLzD9A-M_ll2m7Wj45sHJg"
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
