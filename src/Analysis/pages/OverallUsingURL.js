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
import ToggleSidebar from "../components/ToggleSideBarurl";
import { styled } from "@mui/system";
import LeetCode from "../components/Leetcode";
import LineGraph from "../components/LineGraph";
import StackbarGraph from "../components/Stackbargraph";
import axios from "axios";
import { useParams } from "react-router-dom";
import PieChart from "../components/PieChart";
import Demo from "./demo";
import CopyToClipboard from "react-copy-to-clipboard";
import RankTableAK from "../components/RankTableAK";
import Banner from "../components/Banner";
import FooterNew from '../../Home/components/Footer/FooterNew'
import Ban from "../components/Ban";
import { useCookies } from "react-cookie";
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
  const [leetcodetotal, setLeetCodeTotal] = useState(0);
  const [LineGraphLabel, setLineGraphLabel] = useState([]);
  const [LineGraphSeries, setLineGraphSeries] = useState([]);
  const [PieChartLabel, setPieChartLabel] = useState([]);
  const [PieChartSeries, setPieChartSeries] = useState([]);
  const [StackBarLabel, setStackBarLabel] = useState([]);
  const [StackBarSeries, setStackBarSeries] = useState([]);
  const [subName, setSubName] = useState("");
  const [weak, setWeak] = useState({});
  const [collegeRank, setCollegeRank] = useState(0);
  const [globalRank, setGlobalRank] = useState(0);
  const [collegeRankList, setCollegeRankList] = useState([]);
  const [globalRankList, setGlobalRankList] = useState([]);
  const [listToShow, setListToShow] = useState([]);
  const [isOverall,setIsOverall] = useState(1);
  const [cookies, setCookie] = useCookies(["abcd"]);
  const [demostatus,SetDemostatus] = useState(true);
  const currentURL = window.location.href;
  const publicURL = `${currentURL}`;

  const apti = weak.apti;
  const core = weak.core;
  const sde_bootcamp = weak.sde_bootcamp;
  const getAnalysis = async () => {
    try {
      setVisibility(false);
      const obj = {
        email: email,
        subject: "overall",
      };
      const userData = await axios.post(
        `https://o1apti.herokuapp.com/get_test_analysis`,
        obj
      );
      // const weaktopics = await axios.post(
      //   `https://o1apti.herokuapp.com/weak_topic`,
      //   { email }
      // );
      // setWeak(weaktopics.data);
      setName(userData.data.name);
      setSubName(userData.data.subject);
      setLeetCodeLabel(userData.data.leetcode.labels);
      setLeetCodeSeries(userData.data.leetcode.series);
      setLeetCodeTotal(userData.data.leetcode.total);
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
      "general aptitude",
      "language",
    ];
    if(key===0){
      setIsOverall(1);
    }else{
      setIsOverall(0);
    }
    try {
      const obj = {
        email: email,
        subject: subjectlist[key],
        // rank_subject: "overall",
      };
      const userData = await axios.post(
        `https://o1apti.herokuapp.com/ranklist/subject_ranklist`,
        obj
      );
      // console.log(userData);
      // console.log(userData.data.college_list[1][0]);
      // setCollegeRank(userData.data.college_rank);
      // setGlobalRank(userData.data.global_rank);
      setCollegeRankList(userData.data.collegeRanklist);
      setGlobalRankList(userData.data.globalRanklist);
      setListToShow(userData.data.globalRanklist);

      // console.log({globalRank,collegeRankList,globalRankList});
    } catch (error) {
      toast.warn("Something went wrong. Please check your email");
      console.log(error);
    }
    // console.log(collegeRank);
  };

  const fetchSubject = async (key) => {
    try {
      const subjectlist = [
        "overall",
        "dsa",
        "cn",
        "dbms",
        "os",
        "oops",
        "general aptitude",
        "language",
      ];

      const obj = {
        email: email,
        subject: subjectlist[key],
      };
      setVisibility(false);
      const subject = await axios.post(
        `https://o1apti.herokuapp.com/get_test_analysis`,
        obj
      );
      // const weaktopics = await axios.post(
      //   `https://o1apti.herokuapp.com/weak_topic`,
      //   { email }
      // );
      
      getRankTable(key);
      setSubName(subject.data.subject);
      // setWeak(weaktopics.data);
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
      toast.info("Check your " + obj.subject + " analysis here");
    } catch (error) {
            setVisibility(true);
      toast.error("Subject data not found");
    }
  };

  useEffect(() => {
    getAnalysis();
    getRankTable(0);
    if("democookie" in cookies){
      SetDemostatus(false)
    }
    else{
      SetDemostatus(true);
        setCookie("democookie",'done');
    }
  }, [0]);

  const handleGlobalRankList = () => {
    setListToShow(globalRankList);
  };

  const handleCollegeRankList = () => {
    setListToShow(collegeRankList);
  };

  const [active, SetActive] = useState(false);

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
          <ToggleSidebar subName={subName} fetchSubject={fetchSubject} />

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
                    <h2 className="user-detail"> Hello,{" "}{name} </h2>
                    <p>Nice to meet you !</p>
                    {/* <Typography variant="body1"> {publicURL}</Typography> */}
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
                       Copy Public Profile URL
                      </Button>
                    </CopyToClipboard>
                    <br></br>
                    {/* <Typography>Global Rank: {globalRank} </Typography>
                    <Typography>College Rank: {collegeRank}</Typography> */}
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
                        leetcodeTotal={leetcodetotal}
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
              <Grid item xs={12}>
                <Box>
                  <Card
                    className="rankTable"
                    sx={{
                      boxShadow: 2,
                      minWidth: 275,
                      backgroundColor: "#10153B",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {isOverall
                      ?(<Button
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
                      </Button>)
                      :('')}
                      {/* <Button
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
                      </Button> */}
                      <Button
                        onClick={() => {
                          handleGlobalRankList();
                          SetActive(true);
                        }}
                        variant="contained"
                        color="secondary"
                        style={{
                          marginTop: "1rem",
                          marginLeft: "1rem",
                          background: "#f4f4ff",
                          color: "#6f63e6",
                        }}
                        className={active === true ? "active-btn" : ""}
                      >
                        Global Level RankList
                      </Button>
                    </div>
                    <CardContentsMobile>
                      <RankTableAK
                        collegeRank={collegeRank}
                        globalRank={globalRank}
                        ListToShow={listToShow}
                        collegeRankList={collegeRankList}
                        globalRankList={globalRankList}
                        email={email}
                      />
                    </CardContentsMobile>
                  </Card>
                </Box>
              </Grid>
            </Grid>
            <br />
            <Banner/>
            <Ban weak={weak} name={name}/>
            <FooterNew/>
          </Container>
          {demostatus?<Demo />:''} 
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default Overall;
