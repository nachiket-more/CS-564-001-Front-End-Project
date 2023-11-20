import React from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(IATA_CODE, Name, City, State) {
  return { IATA_CODE, Name, City, State };
}

const rows = [
  createData("ABE", "Lehigh Valley International Airport", "Allentown", "PA"),
  createData("ABI", "Abilene Regional Airport", "Abilene", "TX"),
  createData("ABQ", "Albuquerque International Sunport", "Albuquerque", "NM"),
  createData("ABR", "Aberdeen Regional Airport", "Aberdeen", "SD"),
  createData("ABY", "Southwest Georgia Regional Airport", "Albany", "GA"),
  createData("ACK", "Nantucket Memorial Airport", "Nantucket", "MA"),
  createData("ACT", "Waco Regional Airport", "Waco", "TX"),
  createData("ACV", "Arcata Airport	Arcata", "Eureka", "CA,"),
  createData("ABE", "Lehigh Valley International Airport", "Allentown", "PA"),
  createData("ABI", "Abilene Regional Airport", "Abilene", "TX"),
  createData("ABQ", "Albuquerque International Sunport", "Albuquerque", "NM"),
  createData("ABR", "Aberdeen Regional Airport", "Aberdeen", "SD"),
  createData("ABY", "Southwest Georgia Regional Airport", "Albany", "GA"),
  createData("ACK", "Nantucket Memorial Airport", "Nantucket", "MA"),
  createData("ACT", "Waco Regional Airport", "Waco", "TX"),
  createData("ACV", "Arcata Airport	Arcata", "Eureka", "CA,"),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#efefef",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const FlightsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 'fit-content' }} align="center">IATA_CODE</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell style={{ width: 'fit-content' }} align="center">City</TableCell>
            <TableCell style={{ width: 'fit-content' }} align="center">State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell style={{ width: 'fit-content' }} align="center">{row.IATA_CODE}</StyledTableCell>
              <StyledTableCell align="center">{row.Name}</StyledTableCell>
              <StyledTableCell style={{ width: 'fit-content' }} align="center">{row.City}</StyledTableCell>
              <StyledTableCell style={{ width: 'fit-content' }} align="center">{row.State}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FlightsTable;
