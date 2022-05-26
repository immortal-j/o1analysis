import {
  Backdrop,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ToggleSidebar from "../components/ToggleSideBar";
import { styled } from "@mui/system";
import LeetCode from "../components/Leetcode";
import LineGraph from "../components/LineGraph";
import StackbarGraph from "../components/Stackbargraph";
import axios from "axios";
import { useParams } from "react-router-dom";
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

const Overall = () => {
  const { email } = useParams();
  const [visibility, setVisibility] = useState(false);
  const [name, setName] = useState("");
  const [leetcodeLabel, setLeetCodeLabel] = useState([]);
  const [leetcodeSeries, setLeetCodeSeries] = useState([]);
  const [LineGraphLabel, setLineGraphLabel] = useState([]);
  const [LineGraphSeries, setLineGraphSeries] = useState([]);
  const [PieChartLabel, setPieChartLabel] = useState([]);
  const [PieChartSeries, setPieChartSeries] = useState([]);
  const [StackBarLabel, setStackBarLabel] = useState([]);
  const [StackBarSeries, setStackBarSeries] = useState([]);

  const getAnalysis = async () => {
    try {
      setVisibility(false);
      const obj = {
        email: email,
        subject_frontend: "overall",
      };
      const userData = await axios.post(
        `https://o1apti.herokuapp.com/get_test_analysis`,
        obj
      );
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
      setVisibility(true);
    } catch (error) {
      toast.warn("Something went wrong. Please check your email");
      console.log(error);
    }
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
    setVisibility(false);
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
    setVisibility(true);
    toast.info("Check your " + obj.subject_frontend + " analysis here");
  };

  useEffect(() => {
    getAnalysis();
  }, []);

  return (
    <>
      {!visibility && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="secondary" />
        </Backdrop>
      )}

      {visibility && (
        <div>
          <ToggleSidebar fetchSubject={fetchSubject} />
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
                    <h2> Hello,{name} </h2>
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

export default Overall;
