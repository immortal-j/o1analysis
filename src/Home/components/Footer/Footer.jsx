import { Box, Container, Grid, Link } from "@mui/material";
import React from "react";
const FooterPos = {
  position: "absolute",
  top: "400vh",
  color:"white"
,
// '&:hover'{
// 'transform:translateY(1px)'
// }
};

const LinkStyle ={
    textDecoration: "none",
    padding:" 10px 0",
    "&:hover": {
        background: "#efefef"
      },

}

const Footer = () => {
  return (
    <footer style={FooterPos}>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} width="100vw">
        <Container maxWidth="lg"  >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}  md={4}>
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
            <Grid item xs={12} sm={4}  md={4}>
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
            <Grid item xs={12} sm={4}  md={4}>
              <Box borderBottom={1}>Help</Box>

              <Box>
                <Link href="/" color="inherit" style={LinkStyle}>
                  Linkedin
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={LinkStyle}>
                  Twitter
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={LinkStyle}>
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={LinkStyle}>
                  Youtube
                </Link>
              </Box>
            </Grid>
          </Grid>

<Box textAlign="center" pt={{xs:5,sm:10,lg:3}} pb={{xs:5,sm:0, lg:3}}>

    O(1) Analysis & Statistics, &reg; {new Date().getFullYear()}
</Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
