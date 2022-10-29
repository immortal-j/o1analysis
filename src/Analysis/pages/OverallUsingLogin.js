import { Backdrop, Button, Card, CardContent, CircularProgress, Container, Grid, Modal, TextField, Typography, } from "@mui/material";
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
import Demo from "./demo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useCookies } from "react-cookie";
import Banner from "../components/Banner";
import Contest from "../components/Contest";
import FooterNew from "../../Home/components/Footer/FooterNew";
import RankTableAK from "../components/RankTableAK";
import Ban from "../components/Ban";
import DailyQuestion from "../components/DailyQuestion";
import Heatmap from "../components/Heatmap";
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
  minWidth: 350,
  borderRadius: "2rem",
  bgcolor: "white",
  border: "2px solid #000",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const Overall2 = () => {
  const [openContest, setOpenContest] = React.useState(false);
  const handleOpenContest = () => setOpenContest(true);
  const handleCloseContest = () => setOpenContest(false);

  const [openQOTD, setOpenQOTD] = React.useState(false);
  const handleOpenQOTD = () => setOpenQOTD(true);
  const handleCloseQOTD = () => setOpenQOTD(false);


  const [leetcodeLabel, setLeetCodeLabel] = useState([]);
  const [leetcodeSeries, setLeetCodeSeries] = useState([]);
  const [leetcodeTotalSeries, setLeetCodeTotalSeries] = useState([]);
  const [leetcodetotal, setLeetCodeTotal] = useState(0);
  const [LineGraphLabel, setLineGraphLabel] = useState([]);
  const [LineGraphSeries, setLineGraphSeries] = useState([]);
  const [PieChartLabel, setPieChartLabel] = useState([]);
  const [PieChartSeries, setPieChartSeries] = useState([]);
  const [StackBarLabel, setStackBarLabel] = useState([]);
  const [StackBarSeries, setStackBarSeries] = useState([]);
  const [open, setOpen] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [subName, setSubName] = useState("Overall Analysis");
  const [loading, setLoading] = useState(false);
  const [collegeRank, setCollegeRank] = useState(0);
  const [globalRank, setGlobalRank] = useState(0);
  const [collegeRankList, setCollegeRankList] = useState([]);
  const [globalRankList, setGlobalRankList] = useState([]);
  const [listToShow, setListToShow] = useState([]);
  const [weak, setWeak] = useState({});
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [active, SetActive] = useState(false);
  const [cookies, setCookie] = useCookies(["abcd"]);
  const [isOverall, setIsOverall] = useState(1);
  const [demostatus, SetDemostatus] = useState(true);
  const obj = {
    email: email,
    subject: "overall",
  };
  const currentURL = window.location.href;

  const publicURL = `${currentURL}/${email}`;

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
    if (key === 0) {
      setIsOverall(1);
    } else {
      setIsOverall(0);
    }
    try {
      const obj = {
        email: email,
        subject: subjectlist[key],
        // rank_subject: "overall",
      };
      // console.log(obj);
      const userData = await axios.post(
        `https://o1apti.herokuapp.com/ranklist/subject_ranklist`,
        obj
      );
      // console.log(userData.data);
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

  const getRankTableWithCookie = async (key, par) => {
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
    if (key === 0) {
      setIsOverall(1);
    } else {
      setIsOverall(0);
    }
    try {
      const obj = {
        email: par,
        subject: subjectlist[key],
        // rank_subject: "overall",
      };

      const userData = await axios.post(
        `https://o1apti.herokuapp.com/ranklist/subject_ranklist`,
        obj
      );
      // console.log(userData.data);
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
    setLoading(true);
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
      getRankTable(key);
      const obj = {
        email: email,
        subject: subjectlist[key],
      };

      const subject = await axios.post(
        `https://o1apti.herokuapp.com/get_test_analysis`,
        obj
      );
      // const weaktopics = await axios.post(
      //   `https://o1apti.herokuapp.com/weak_topic`,
      //   { email }
      // );

      // setWeak(weaktopics.data);
      // console.log(subject);
      setSubName(subject.data.subject);
      setLeetCodeLabel(subject.data.leetcode.labels);
      setLeetCodeSeries(subject.data.leetcode.series);
      setLeetCodeTotal(subject.data.leetcode.total);
      setLeetCodeTotalSeries(subject.data.leetcode.total_series);
      setLineGraphLabel(subject.data.linegraph.labels);
      setLineGraphSeries(subject.data.linegraph.series);
      setPieChartLabel(subject.data.piechart.labels);
      setPieChartSeries(subject.data.piechart.series);
      setPieChartLabel(subject.data.piechart.labels);
      setPieChartSeries(subject.data.piechart.series);
      setStackBarLabel(subject.data.stackgraph.labels);
      setStackBarSeries(subject.data.stackgraph.series);
      setLoading(false);
      toast.info("Check your " + obj.subject + " analysis here");
    } catch (error) {
      setLoading(false);
      toast.error("Subject data not found");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.trim() == "") {
      toast.error("Please enter your email");
      return;
    }

    setCookie("o1user", email, { maxAge: 1800 });
    setLoading(true);

    try {
      const userData = await axios.post(
        `https://o1apti.herokuapp.com/get_test_analysis`,
        obj
      );
      fetchWeakTopics(email);
      setName(userData.data.name);
      // console.log(userData);
      setLeetCodeLabel(userData.data.leetcode.labels);
      setLeetCodeSeries(userData.data.leetcode.series);
      setLeetCodeTotal(userData.data.leetcode.total);
      setLeetCodeTotalSeries(userData.data.leetcode.total_series);
      setLineGraphLabel(userData.data.linegraph.labels);
      setLineGraphSeries(userData.data.linegraph.series);
      setPieChartLabel(userData.data.piechart.labels);
      setPieChartSeries(userData.data.piechart.series);
      setPieChartLabel(userData.data.piechart.labels);
      setPieChartSeries(userData.data.piechart.series);
      setStackBarLabel(userData.data.stackgraph.labels);
      setStackBarSeries(userData.data.stackgraph.series);
      setToggle(!toggle);
      toast.info("Check your result here");
      getRankTable(0);
      setLoading(false);
      handleClose();
    } catch (e) {
      toast.warn("Please fill valid fields");
      setLoading(false);
      console.log(e);
    }
  };
  const handleLoginWithCookie = async (par) => {
    // e.preventDefault();
    setEmail(par);
    setLoading(true);
    try {
      const userData = await axios.post(
        `https://o1apti.herokuapp.com/get_test_analysis`,
        {
          email: par,
          subject: "overall",
        }
      );
      fetchWeakTopics(par);
      setName(userData.data.name);
      setSubName(userData.data.subject);
      setLeetCodeLabel(userData.data.leetcode.labels);
      setLeetCodeSeries(userData.data.leetcode.series);
      setLeetCodeTotalSeries(userData.data.leetcode.total_series);
      setLeetCodeTotal(userData.data.leetcode.total);
      setLineGraphLabel(userData.data.linegraph.labels);
      setLineGraphSeries(userData.data.linegraph.series);
      setPieChartLabel(userData.data.piechart.labels);
      setPieChartSeries(userData.data.piechart.series);
      setPieChartLabel(userData.data.piechart.labels);
      setPieChartSeries(userData.data.piechart.series);
      setStackBarLabel(userData.data.stackgraph.labels);
      setStackBarSeries(userData.data.stackgraph.series);
      setToggle(!toggle);
      toast.info("Check your result here");
      getRankTableWithCookie(0, par);
      setLoading(false);
      handleClose();
    } catch (e) {
      toast.warn("Please fill valid fields");
      setLoading(false);
      console.log(e);
    }
  };
  const fetchWeakTopics = async (par) => {
    // console.log(par);
    const weaktopics = await axios.post(
      `https://o1apti.herokuapp.com/weak_topic`,
      { email: par }
    );

    setWeak(weaktopics.data);
  };
  const handlecookie = (par) => {
    handleLoginWithCookie(par);
  };
  useEffect(() => {
    if ("o1user" in cookies) {
      handlecookie(cookies.o1user);
    }

    if ("democookie" in cookies) {
      SetDemostatus(false);
    } else {
      SetDemostatus(true);
      setTimeout(() => {
        setCookie("democookie", "done");
      }, 100);
    }
  }, [0]);

  const handleGlobalRankList = () => {
    setListToShow(globalRankList);
  };

  const handleCollegeRankList = () => {
    setListToShow(collegeRankList);
  };
  const handleDemotrue = () => {
    setTimeout(() => {
      SetDemostatus(false);
    }, 100);
    setTimeout(() => {
      SetDemostatus(true);
    }, 200);
  };
  const handleDemofalse = () => { };
  return (
    <div>
      {!toggle && (
        <div>
          {loading && (
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1000,
              }}
              open={true}
            >
              <CircularProgress color="secondary" />
            </Backdrop>
          )}
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
                <Grid
                  item
                  md={6}
                  xs={12}
                  display={{ md: "block", xs: "block" }}
                >
                  <img
                    src={loginImage}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item md={6} xs={12} style={{ textAlign: "center" }}>
                  {/* <Typography variant={"h4"} marginBottom={2}>
                    Login Here for Analysis
                  </Typography> */}
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
                    Check Analysis
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </div>
      )}
      {toggle && (
        <div>
          {loading && (
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1000,
              }}
              open={true}
            >
              <CircularProgress color="secondary" />
            </Backdrop>
          )}
          <ToggleSidebar
            subName={subName}
            fetchSubject={fetchSubject}
            demoStatus={handleDemotrue}
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
                  <CardContents className="user-detail">
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
                    {/* <Typography variant="body1"> {publicURL}</Typography> */}
                    <CopyToClipboard text={publicURL}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          toast.info("Copied to Clipboard", {
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
                    <div style={{ display: 'flex', gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
                      <Button variant="contained" onClick={handleOpenContest}>Today's Contest</Button>
                      <Button variant="contained" onClick={handleOpenQOTD}>Question of the day</Button>
                    </div>
                    <br></br>
                    {/* <Typography>Global Rank: {globalRank} </Typography>
                    <Typography>College Rank: {collegeRank}</Typography> */}
                    <DailyQuestion handleOpenQOTD={handleOpenQOTD} openQOTD={openQOTD} handleCloseQOTD={handleCloseQOTD} />
                    <Contest handleOpenContest={handleOpenContest} openContest={openContest} handleCloseContest={handleCloseContest} />
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
                        leetcodeTotalSeries={leetcodeTotalSeries}
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
              <Heatmap HeatGraphLabel={LineGraphLabel} HeatGraphSeries={LineGraphLabel}              />
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
                      {isOverall ? (
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
                      ) : (
                        ""
                      )}
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
                        {isOverall
                          ? "Global Level RankList"
                          : "Subject wise Ranklist"}
                      </Button>
                    </div>
                    <CardContentsMobile>
                      <RankTableAK
                        ListToShow={listToShow}
                        collegeRankList={collegeRankList}
                        globalRankList={globalRankList}
                        email={email}
                      />
                    </CardContentsMobile>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Ban weak={weak} name={name} />
                </Box>
              </Grid>
            </Grid>

            {demostatus ? <Demo demoStatus={demostatus} /> : ""}
            {/* <Banner /> */}

            <FooterNew />
          </Container>
        </div>
      )}
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
    </div>
  );
};

export default Overall2;
