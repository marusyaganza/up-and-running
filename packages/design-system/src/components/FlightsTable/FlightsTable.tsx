import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  tableCellClasses,
  TableContainer,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { Flight } from "../../generated/graphql";

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
    backgroundColor: theme.palette.action.hover,
  },
  "&.cancelled": {
    backgroundColor: theme.palette.warning.light,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface FlightType extends Flight {
  action?: () => void;
}

export interface FlightsTableProps {
  flights: FlightType[];
  withAction?: boolean;
}

export const FlightsTable = ({ flights, withAction }: FlightsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Destination</StyledTableCell>
            <StyledTableCell align="right">Origin</StyledTableCell>
            <StyledTableCell align="right">Starship</StyledTableCell>
            {withAction && <StyledTableCell align="right"></StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map((flight) => {
            const date = new Date(flight.date).toLocaleDateString("en-US");
            return (
              <StyledTableRow
                key={flight.id}
                className={flight?.isCancelled ? "cancelled" : ""}
              >
                <StyledTableCell data-cy="date" component="th" scope="row">
                  {date} {flight?.isCancelled ? "[cancelled]" : ""}
                </StyledTableCell>
                <StyledTableCell ata-cy="destination" align="right">
                  {flight.destination}
                </StyledTableCell>
                <StyledTableCell data-cy="origin" align="right">
                  {flight.origin}
                </StyledTableCell>
                <StyledTableCell data-cy="starship" align="right">
                  {flight.starship}
                </StyledTableCell>
                {flight?.action && (
                  <StyledTableCell align="right">
                    <IconButton
                      data-cy="cancel-btn"
                      onClick={flight?.action}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                )}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
