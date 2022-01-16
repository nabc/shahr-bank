import { useTable, TableOptions } from "react-table";
import StyledTable, {
  StyledDiv,
  StyledTableBody,
  StyledTableCells,
  StyledTableHead,
  StyledTableRows,
} from "./Styles/StyledTable";
import NoData from "src/core/components/NoData";
import Loader from "src/core/components/Loader";
import { Paper, useTheme } from "@mui/material";

export interface TableModel<T extends object = {}> extends TableOptions<T> {
  loaded: boolean;
}

export default function Table<T extends object>({ columns, data, loaded }: TableModel<T>) {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  const theme = useTheme();

  return (
    <>
      <Paper
        sx={{
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: theme.spacing(0.5),
          width: "100%",
          fontSize: theme.spacing(1.5),
          // overflowX: 'auto',
        }}
      >
        <StyledDiv>
          {loaded && <Loader loaderType="linear" />}
          <StyledTable {...getTableProps()}>
            <StyledTableHead>
              {headerGroups.map((headerGroup) => (
                <StyledTableRows {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    let { style, ...headerProps } = column.getHeaderProps();
                    if ((headerProps?.key as string)?.includes("selector")) {
                      style = {
                        ...style,
                        minWidth: "50px",
                        maxWidth: "50px",
                        width: "50px",
                      };
                    }
                    return (
                      <StyledTableCells {...headerProps} style={{ ...style }} {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </StyledTableCells>
                    );
                  })}
                </StyledTableRows>
              ))}
            </StyledTableHead>
            <StyledTableBody>
              {rows.length === 0 && loaded && (
                <StyledTableRows style={{ justifyContent: "center", display: "flex" }}>
                  <StyledTableCells colSpan={columns.length}>
                    <NoData />
                  </StyledTableCells>
                </StyledTableRows>
              )}
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <>
                    <StyledTableRows id={`aa-row${index}-table`} index={index} {...row.getRowProps()}>
                      {row.cells.map(
                        (cell: {
                          getCellProps: () => JSX.IntrinsicAttributes &
                            React.ClassAttributes<HTMLDivElement> &
                            React.HTMLAttributes<HTMLDivElement>;
                          render: (arg0: string) => React.ReactNode;
                        }) => {
                          let { style, ...cellProps } = cell.getCellProps();

                          return (
                            <StyledTableCells
                              {...(cellProps as any)}
                              sx={[
                                (cellProps?.key as string)?.includes("selector") && {
                                  ...style,
                                  minWidth: "50px",
                                  maxWidth: "50px",
                                  width: "50px",
                                },
                              ]}
                            >
                              {cell.render("Cell")}
                            </StyledTableCells>
                          );
                        }
                      )}
                    </StyledTableRows>
                  </>
                );
              })}
            </StyledTableBody>
          </StyledTable>
        </StyledDiv>
      </Paper>
      {/* <Paper
        sx={{
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: theme.spacing(0.5),
          width: "100%",
          fontSize: theme.spacing(1.5),
          // overflowX: 'auto',
        }}
      >
        <StyledDiv>
          <StyledTable {...getTableProps()}>
            <StyledTableHead>
              {headerGroups.map((headerGroup: any, index: number) => (
                <TableHeader<T>
                  key={index}
                  headerGroup={headerGroup}
                  index={index}
                  flatHeaders={flatHeaders}
                  setColumnOrder={setColumnOrder}
                />
              ))}
            </StyledTableHead>
            <StyledTableBody
              loaded={loaded}
              loading={loading}
              total={total}
              // className={clsx(
              //   classes.body,
              //   !loaded || total === 0 ? classes.bodyEmpty : '',
              //   loading ? classes.bodyLoading : ''
              // )}
              {...getTableBodyProps()}
            >
              {loading && (
                <tr>
                  <Box
                    component="td"
                    sx={{
                      position: "absolute",
                      top: 0,
                      width: "100%",
                    }}
                  >
                    <LinearProgress />
                  </Box>
                </tr>
              )}

              {total === 0 && (
                // <TableCell
                //   colSpan={headerGroups[0].headers.length}
                //   style={{ border: 'none' }}
                // >
                <NoData subtitleText={<Trans i18nKey={`dataTable.${loading ? "loading" : "noData"}`} />} />
                // </TableCell>
              )}
              {data.map((row: any, index: number) => {
                prepareRow(row);
                return (
                  <StyledTableRows
                    id={`aa-row${index}-table`}
                    index={index}
                    className={{
                      rowSelected: row.isSelected,
                      rowDeleted: row.original.deleted,
                    }}
                    {...row.getRowProps()}
                    onClick={() => {
                      typeof handleRowClick !== "undefined" && handleRowClick(row.original);
                    }}
                  >
                    {row.cells.map(
                      (cell: {
                        getCellProps: () => JSX.IntrinsicAttributes &
                          React.ClassAttributes<HTMLDivElement> &
                          React.HTMLAttributes<HTMLDivElement>;
                        render: (arg0: string) => React.ReactNode;
                      }) => {
                        let { style, ...cellProps } = cell.getCellProps();

                        return (
                          <StyledTableCells
                            {...(cellProps as any)}
                            style={{
                              ...style,
                              // minWidth: '50px',
                              // maxWidth: '50px',
                              // width: '50px',
                            }}
                            // sx={[
                            //   (cellProps?.key as string)?.includes(
                            //     'selector'
                            //   ) && {
                            //     ...style,
                            //     minWidth: '50px',
                            //     maxWidth: '50px',
                            //     width: '50px',
                            //   },
                            // ]}
                          >
                            {cell.render("Cell")}
                          </StyledTableCells>
                        );
                      }
                    )}
                  </StyledTableRows>
                );
              })}
            </StyledTableBody>
          </StyledTable>
        </StyledDiv>
      </Paper> */}
    </>
  );
}
