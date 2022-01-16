/* eslint-disable react-hooks/exhaustive-deps */
import Button from "@mui/material/Button";
import { useMemo } from "react";
import { CellProps } from "react-table";

const displayKeys = ["counter-code", "counter-name", "city-name", "province-name", "region", "referer1", "referer2"];

export default function useTableColumns() {
  const columns: any[] = useMemo(() => {
    return displayKeys.map((key: string) => {
      switch (key) {
        case "referer1":
          return {
            accessor: key,
            Header: () => <>راهبر اول</>,
            Cell: ({ cell }: CellProps<any>) => <Button variant="contained">{cell.row.original[key].name}</Button>,
          };
        case "referer2":
          return {
            accessor: key,
            Header: () => <>راهبر دوم</>,
            Cell: ({ cell }: CellProps<any>) => <Button variant="contained">{cell.row.original[key].name}</Button>,
          };
        case "region":
          return {
            accessor: key,
            Header: () => "منطقه",
          };
        case "province-name":
          return {
            accessor: key,
            Header: () => "نام استان",
          };
        case "city-name":
          return {
            accessor: key,
            Header: () => "نام شهر",
          };
        case "counter-code":
          return {
            accessor: key,
            Header: () => "کد پیشخوان",
          };
        case "counter-name":
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
