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
      console.log(ranklistData.data.ranklist);
      setData(ranklistData.data.ranklist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRanklist();
  }, []);

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
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>DSA</TableCell>
              <TableCell>DBMS</TableCell>
              <TableCell>CN</TableCell>
              <TableCell>OS</TableCell>
              <TableCell>OOPS</TableCell>
              <TableCell>Verbal</TableCell>
              <TableCell>Quantitative</TableCell>
              <TableCell>Logical</TableCell>
              <TableCell>Total Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {key + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.scores.dsa?row.scores.dsa:0}</TableCell>
                <TableCell>{row.scores.dbms?row.scores.dbms:0}</TableCell>
                <TableCell>{row.scores.cn?row.scores.cn:0}</TableCell>
                <TableCell>{row.scores.os?row.scores.os:0}</TableCell>
                <TableCell>{row.scores.oops?row.scores.oops:0}</TableCell>
                <TableCell>{row.scores.verbal?row.scores.verbal:0}</TableCell>
                <TableCell>{row.scores.quantitative?row.scores.quantitative:0}</TableCell>
                <TableCell>{row.scores.logical?row.scores.logical:0}</TableCell>
                <TableCell>{row.total_score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
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
            />
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default RankListPratik;
