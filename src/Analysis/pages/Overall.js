import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ToggleSidebar from "../components/ToggleSideBar";
import { styled } from "@mui/system";
import LeetCode from "../components/Leetcode";
import LineGraph from "../components/LineGraph";
import StackbarGraph from "../components/Stackbargraph";
import axios from "axios";
import userActions from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PieChart from "../components/PieChart";

const CardContents = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: "#F4F4FF",
  minHeight: "25rem",
  maxHeight: "25rem",
  padding: "2rem",
});
const CardContentsMobile = styled(CardContent)({
  color: "#F4F4FF",
  padding: "2rem",
});

const handleclick = () => {};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Overall = ({email}) => {
  const [toggle, setToggle] = useState(true);
  const { name } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userData.allUser);
  // console.log(data);

  const byId = data.filter(function (e) {
    return e.name === name;
  });

  useEffect(() => {
    // dispatch(userActions());
    const obj = {
      email: email,
      subject_frontend: "overall",
    };
    axios
      .post(`https://o1apti.herokuapp.com/get_test_analysis`, obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
    
      <div >
        <ToggleSidebar />
        <Container maxWidth="xl">
          <Grid container spacing={2} rowSpacing={3} columnSpacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ boxShadow: 1, minWidth: 275, backgroundColor: "#6F63E6" }}
              >
                <button onClick={handleclick}> Click</button>
                <CardContents>
                  <EmojiPeopleIcon
                    sx={{
                      boxShadow: 2,
                      fontSize: "4rem",
                      borderRadius: "2rem",
                      backgroundColor: "#7468F0",
                      padding: "0.3rem",
                    }}
                  />
                  <h2> Hello, {byId[0].name}</h2>
                  <p>Nice to meet you !</p>
                </CardContents>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Card
                  sx={{
                    boxShadow: 2,
                    minWidth: 275,
                    backgroundColor: "#10153B",
                  }}
                >
                  <CardContents>
                    <PieChart byId={byId} />
                  </CardContents>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Card
                  sx={{
                    boxShadow: 2,
                    minWidth: 275,
                    backgroundColor: "#10153B",
                  }}
                >
                  <CardContents>
                    <LeetCode byId={byId} />
                  </CardContents>
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box>
                <Card
                  sx={{
                    boxShadow: 2,
                    minWidth: 275,
                    backgroundColor: "#10153B",
                  }}
                >
                  <CardContentsMobile>
                    <StackbarGraph byId={byId} />
                  </CardContentsMobile>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Card
                  sx={{
                    boxShadow: 2,
                    minWidth: 275,
                    backgroundColor: "#10153B",
                  }}
                >
                  <CardContentsMobile>
                    <LineGraph byId={byId} />
                  </CardContentsMobile>
                </Card>
              </Box>
            </Grid>
          </Grid> 
        </Container>
      </div>
    </>
  );
};

export default Overall;
