import {
  Backdrop,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Button,
  Grid,
  Typography,
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
import Demo from "./demo";
import CopyToClipboard from "react-copy-to-clipboard";
import Ranklist from "../components/Ranklist"
import RankListPratik from "../components/RankListPratik";
import RankTable from "../components/RankTable";
import RankTableAK from "../components/RankTableAK";

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
  const [subName, setSubName] = useState("");
  const [collegeRank, setCollegeRank] = useState(0);
  const [globalRank, setGlobalRank] = useState(0);
  const [collegeRankList, setCollegeRankList] = useState([]);
  const [globalRankList, setGlobalRankList] = useState([]);
  const [listToShow, setListToShow] = useState([]);  
  const currentURL = window.location.href
  const publicURL=`${currentURL}`

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
      setSubName(userData.data.subject);
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

  const getRankTable = async (key) => {
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
    try {
      const obj = {
        email: email,
        subject: subjectlist[key],
      };
      const userData = await axios.post(
        `https://o1apti.herokuapp.com/get_user_ranklist`,
        obj
      );
      // console.log("Hello");
      console.log(userData);
      setCollegeRank(userData.data.college_rank);
      setGlobalRank(userData.data.global_rank);
      setCollegeRankList(userData.data.college_list);
      setGlobalRankList(userData.data.global_list);
      
      // console.log({globalRank,collegeRankList,globalRankList});
    } catch (error) {
      toast.warn("Something went wrong. Please check your email");
      console.log(error);
    }
    // console.log(collegeRank);
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
    getRankTable(key);
    setSubName(subject.data.subject);

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
    getRankTable(0);
  },[]);

  const handleGlobalRankList = () =>{
    setListToShow(globalRankList);
  }

  const handleCollegeRankList = () => {
    setListToShow(collegeRankList);
  }

  return (
    <div>
      <ToastContainer
        position="bottom-right"
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
          <ToggleSidebar subName={subName} fetchSubject={fetchSubject}  />

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
                    <h2 className="user-detail"> Hello,{name} </h2>
                    <p>Nice to meet you !</p>
                    <Typography variant="body2"> {publicURL}</Typography>
                    <CopyToClipboard text={publicURL}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          toast.info("Copy to Clipboard", {
                            position: "bottom-right",
                            autoClose: 1500,
                            closeOnClick: true,
                            draggable: true,
                            theme: "dark",
                            progress: undefined,
                          });
                        }}
                        color="secondary"
                        style={{
                          marginTop: "1rem",
                          background: "#f4f4ff",
                          color: "#6f63e6",
                        }}
                      >
                        Public Profile URL
                      </Button>
                    </CopyToClipboard>
                    <br></br>
                    <Typography>Global Rank: {globalRank} </Typography>
                    <Typography>College Rank: {collegeRank}</Typography>
                  </CardContents>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <Card
                    className="overall-analysis"
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
                    className="levelwise-analysis"
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
                    className="correct-analysis"
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
                    className="subjectWise-analysis"
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
              <Grid item xs={12} sm={8}>
                <Box>
                  <Card
                    className="rankTable"
                    sx={{
                      boxShadow: 2,
                      minWidth: 275,
                      backgroundColor: "#10153B",
                    }}
                  >
                    <Button
                      onClick={handleCollegeRankList}
                      variant="contained"
                      color="secondary"
                      style={{
                        marginTop: "1rem",
                        marginLeft: "2rem",
                        background: "#f4f4ff",
                        color: "#6f63e6",
                      }}
                    >
                      College Level RankList
                    </Button>
                    <Button
                      onClick={handleGlobalRankList}
                      variant="contained"
                      color="secondary"
                      style={{
                        marginTop: "1rem",
                        marginLeft: "1rem",
                        background: "#f4f4ff",
                        color: "#6f63e6",
                      }}
                    >
                      Global Level RankList
                    </Button>
                    <CardContentsMobile>
                      <RankTableAK
                        collegeRank={collegeRank}
                        globalRank={globalRank}
                        ListToShow = {listToShow}
                        collegeRankList={collegeRankList}
                        globalRankList={globalRankList}
                        email={email}
                      />
                    </CardContentsMobile>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Demo />
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default Overall;
