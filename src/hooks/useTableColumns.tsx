/* eslint-disable react-hooks/exhaustive-deps */
import Button from "@mui/material/Button";
import { useMemo } from "react";
import { CellProps } from "react-table";
import { fromAppActions, useApp } from "src/AppContext";

const displayKeys = ["counterCode", "counterName", "cityName", "provinceName", "region", "reports"];

export default function useTableColumns() {
  const { dispatch } = useApp();

  const columns: any[] = useMemo(() => {
    return displayKeys.map((key: string) => {
      switch (key) {
        case "reports":
          return {
            accessor: key,
            Header: () => <>گزارش</>,
            Cell: ({ cell }: CellProps<any>) => (
              <Button
                variant="contained"
                onClick={() => {
                  console.log(cell.row.original.counterCode);

                  dispatch(fromAppActions.setSelectedCounterCode(cell.row.original.counterCode));
                }}
              >
                مشاهده
              </Button>
            ),
          };
        case "region":
          return {
            accessor: key,
            Header: () => "منطقه",
          };
        case "provinceName":
          return {
            accessor: key,
            Header: () => "نام استان",
          };
        case "cityName":
          return {
            accessor: key,
            Header: () => "نام شهر",
          };
        case "counterCode":
          return {
            accessor: key,
            Header: () => "کد پیشخوان",
          };
        case "counterName":
          return {
            accessor: key,
            Header: () => "نام پیشخوان",
          };

        default:
          return {
            accessor: key,
            id: key,
            isVisible: false,
          };
      }
    });
  }, []);

  return { columns };
}
