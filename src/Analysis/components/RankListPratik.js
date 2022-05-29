import { useTheme } from "@emotion/react";
import {
    Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const RankListPratik = () => {
  const [data, setData] = useState([]);
  const getRanklist = async () => {
    try {
      const ranklistData = await axios.get(
        "https://o1apti.herokuapp.com/ranklist/global"
      );
    //
      setData(ranklistData.data.ranklist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRanklist();  
    // const rows =ranklistData.data.ranklist.length;
  }, []);

  // console.log(rows);

  function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Container>
      <h2 style={{color:"white"}}>RankList</h2>
      <TableContainer component={Paper} sx={{backgroundColor:"transparent"}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow >
              <TableCell sx={{color:"white"}}>Rank</TableCell>
              <TableCell sx={{color:"white"}}>Name</TableCell>
              <TableCell sx={{color:"white"}}>Email</TableCell>
              <TableCell sx={{color:"white"}}>DSA</TableCell>
              <TableCell sx={{color:"white"}}>DBMS</TableCell>
              <TableCell sx={{color:"white"}}>CN</TableCell>
              <TableCell sx={{color:"white"}}>OS</TableCell>
              <TableCell sx={{color:"white"}}>OOPS</TableCell>
              <TableCell sx={{color:"white"}}>Verbal</TableCell>
              <TableCell sx={{color:"white"}}>Quantitative</TableCell>
              <TableCell sx={{color:"white"}}>Logical</TableCell>
              <TableCell sx={{color:"white"}}>Total Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, key) => (
              <TableRow key={key} >
                <TableCell component="th" scope="row" sx={{color:"white"}}>
                  {key + 1}
                </TableCell>
                <TableCell sx={{color:"white"}}>{row.name}</TableCell>
                <TableCell sx={{color:"white"}}>{row.email}</TableCell>
                <TableCell sx={{color:"white"}}>{row.scores.dsa?row.scores.dsa:0}</TableCell>
                <TableCell sx={{color:"white"}}>{row.scores.dbms?row.scores.dbms:0}</TableCell>
                <TableCell sx={{color:"white"}}>{row.scores.cn?row.scores.cn:0}</TableCell>
                <TableCell sx={{color:"white"}}>{row.scores.os?row.scores.os:0}</TableCell>
                <TableCell sx={{color:"white"}}>{row.scores.oops?row.scores.oops:0}</TableCell>
                <TableCell sx={{color:"white"}}>{row.scores.verbal?row.scores.verbal:0}</TableCell>
                <TableCell sx={{color:"white"}}>{row.scores.quantitative?row.scores.quantitative:0} </TableCell>
                <TableCell sx={{color:"white"}}>{row.scores.logical?row.scores.logical:0}</TableCell>
                <TableCell sx={{color:"white"}}>{row.total_score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          <TableRow sx={{color:"white"}}>
            {/* <TablePagination */}
              {/* rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            /> */}
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default RankListPratik;
