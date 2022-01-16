import Table, { TableProps } from "@mui/material/Table";
import TableHead, { TableHeadProps } from "@mui/material/TableHead";
import TableBody, { TableBodyProps } from "@mui/material/TableBody";
import TableRow, { TableRowProps } from "@mui/material/TableRow";
import TableCell, { TableCellProps } from "@mui/material/TableCell";
import { alpha } from "@mui/material/styles";
import TableSortLabel, { TableSortLabelProps } from "@mui/material/TableSortLabel";
import { styled } from "@mui/material/styles";

interface TableRowsType extends TableRowProps {
  index?: any;
}

export const StyledDiv = styled("div")(() => ({
  backgroundColor: "#ffffff",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll, scroll",
  backgroundSize: "10px 100%,10px 100%",
  backgroundPosition: "0 0,100%",
  overflow: "auto",
  display: "flex",
}));
export const StyledTableBody = styled(TableBody)<TableBodyProps>(() => ({
  position: "relative",
  display: "flex",
  flex: "1 1 auto",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
}));

export const StyledTableHead = styled(TableHead)<TableHeadProps>(() => ({
  outline: 0,
  display: "flex",
  verticalAlign: "middle",
  color: "rgba(0, 0, 0, 0.87)",
  fontWeight: 500,
  lineHeight: "1.5rem",
  position: "relative",
  "&:hover": {
    opacity: 1,
  },
}));
export const StyledTableRows = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== "index",
})<TableRowsType>(({ theme, index }) => ({
  color: theme.palette.text.secondary,
  outline: 0,
  display: "flex",
  flex: 1,
  verticalAlign: "middle",
  "&:hover": {
    backgroundColor: "rgba(154, 153, 255, 0.2)",
  },
  "&.rowDeleted": {
    backgroundColor: alpha(theme.palette.error.light, 0.5),
    "&:not(.rowSelected):hover": {
      backgroundColor: alpha(theme.palette.error.light, 0.4),
    },
  },
  "&.rowSelected": {
    backgroundColor: "rgba(154, 153, 255, 0.25)",
    "&:hover": {
      backgroundColor: "rgba(154, 153, 255, 0.3)",
    },
  },
  backgroundColor: index % 2 === 0 ? "rgba(154,153,255, 0.09)" : "transparent",
}));
export const StyledTableRow = styled(TableRow)<TableRowProps>(() => ({
  "& .MuiTypography-root": {
    fontWeight: 700,
  },
}));
export const StyledTableCells = styled(TableCell)<TableCellProps>(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  fontWeight: 300,
  minWidth: 150,
  verticalAlign: "inherit",
  display: "flex",
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  wordBreak: "break-word",
  "&:last-child": {
    borderRight: "none",
  },
  fontSize: "14px!important",
  "& *": {
    fontSize: "14px!important",
  },
}));
export const StyledTableCell = styled(TableCell)<TableCellProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  verticalAlign: "inherit",
  fontSize: "14px!important",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "rgba(154, 153, 255, 0.2)",
  },
  "&:last-child": {
    borderRight: "none",
  },
}));
export const StyledTableSortLabel = styled(TableSortLabel)<TableSortLabelProps>(({ theme }) => ({
  padding: theme.spacing(1),
  justifyContent: "flex-start",
  width: "100%",
  height: "100%",
}));
const StyledTable = styled(Table)<TableProps>(() => ({
  background:
    "linear-gradient(to right, white, rgba(255,255,255,0.5)),linear-gradient(to right, rgba(255,255,255,0.5), white)",
  backgroundPosition: "left center, left center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "40px 100%, 40px 100%",
  backgroundAttachment: "local, local",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minWidth: "auto !important",
  // width: '100%',
  borderSpacing: 0,
  position: "relative",
  "&.thead.tr.th:first-of-type": {
    borderLeft: "none",
  },
  "& .MuiTableCell-root": {
    padding: "5px 7px!important",
  },
}));

export default StyledTable;
