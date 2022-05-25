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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImage from "../../Home/images/Register.svg";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ToggleSidebar from "../components/ToggleSideBar";
import { styled } from "@mui/system";
import LeetCode from "../components/Leetcode";
import LineGraph from "../components/LineGraph";
import StackbarGraph from "../components/Stackbargraph";
import axios from "axios";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  height: 400,
  borderRadius: "2rem",
  bgcolor: "white",
  border: "2px solid #000",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const Overall2 = () => {
  const [leetcodeLabel, setLeetCodeLabel] = useState([]);
  const [leetcodeSeries, setLeetCodeSeries] = useState([]);
  const [LineGraphLabel, setLineGraphLabel] = useState([]);
  const [LineGraphSeries, setLineGraphSeries] = useState([]);
  const [PieChartLabel, setPieChartLabel] = useState([]);
  const [PieChartSeries, setPieChartSeries] = useState([]);
  const [StackBarLabel, setStackBarLabel] = useState([]);
  const [StackBarSeries, setStackBarSeries] = useState([]);
  const [open, setOpen] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");

  const obj = {
    email: email,
    subject_frontend: "overall",
  };

  const fetchSubject = async (key) => {
    const subjectlist = [
      "overall",
      "dsa",
      "cn",
      "dbms",
      "os",
      "oops",
      "logical",
      "verbal",
      "quantitative",
    ];

    const obj = {
      email: email,
      subject_frontend: subjectlist[key],
    };
    const subject = await axios.post(
      `https://o1apti.herokuapp.com/get_test_analysis`,
      obj
    );
    setLeetCodeLabel(subject.data.leetcode.labels);
    setLeetCodeSeries(subject.data.leetcode.series);
    setLineGraphLabel(subject.data.linegraph.labels);
    setLineGraphSeries(subject.data.linegraph.series);
    setPieChartLabel(subject.data.piechart.labels);
    setPieChartSeries(subject.data.piechart.series);
    setPieChartLabel(subject.data.piechart.labels);
    setPieChartSeries(subject.data.piechart.series);
    setStackBarLabel(subject.data.stackgraph.labels);
    setStackBarSeries(subject.data.stackgraph.series);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await axios.post(
        `https://o1apti.herokuapp.com/get_test_analysis`,
        obj
      );
      toast.info("Check your result here");

      setName(userData.data.name);
      setLeetCodeLabel(userData.data.leetcode.labels);
      setLeetCodeSeries(userData.data.leetcode.series);
      setLineGraphLabel(userData.data.linegraph.labels);
      setLineGraphSeries(userData.data.linegraph.series);
      setPieChartLabel(userData.data.piechart.labels);
      setPieChartSeries(userData.data.piechart.series);
      setPieChartLabel(userData.data.piechart.labels);
      setPieChartSeries(userData.data.piechart.series);
      setStackBarLabel(userData.data.stackgraph.labels);
      setStackBarSeries(userData.data.stackgraph.series);
      setToggle(!toggle);
      handleClose();
    } catch (e) {
      toast.warn("Please fill valid fields");

      console.log(e);
    }
  };

  return (
    <>
      {!toggle && (
        <div>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Grid
                container
                spacing={4}
                justifyContent={"center"}
                alignItems={"center"}
                style={{ padding: "1rem" }}
              >
                <Grid item md={6} xs={12}>
                  <Typography variant={"h4"} marginBottom={2}>
                    Login Here for Analysis
                  </Typography>
                  <TextField
                    margin={"dense"}
                    fullWidth
                    type="email"
                    name="email"
                    id="standard-basic"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="filled"
                    color="secondary"
                    required
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleLogin}
                    style={{ marginTop: "1rem" }}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item md={6} display={{ md: "block", xs: "none" }}>
                  <img
                    src={loginImage}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Modal>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="colored"
            pauseOnHover
          />
        </div>
      )}
      {toggle && (
        <div>
          <ToggleSidebar fetchSubject={fetchSubject} />
          <Container maxWidth="xl">
            <Grid container spacing={2} rowSpacing={3} columnSpacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    boxShadow: 1,
                    minWidth: 275,
                    backgroundColor: "#6F63E6",
                  }}
                >
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
                    <h2> Hello, {name}</h2>
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
                      <PieChart
                        PieChartLabel={PieChartLabel}
                        PieChartSeries={PieChartSeries}
                      />
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
                      <LeetCode
                        leetcodeLabel={leetcodeLabel}
                        leetcodeSeries={leetcodeSeries}
                      />
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
                      <StackbarGraph
                        StackBarLabel={StackBarLabel}
                        StackBarSeries={StackBarSeries}
                      />
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
                      <LineGraph
                        LineGraphLabel={LineGraphLabel}
                        LineGraphSeries={LineGraphSeries}
                      />
                    </CardContentsMobile>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};

export default Overall2;
