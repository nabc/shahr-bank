import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useApp } from "src/AppContext";
import OverallChart from "src/components/Charts/OverallChart";
import Table from "src/components/Table";
import useTableColumns from "src/hooks/useTableColumns";
import ReportDialog from "src/pages/Reports/ReportDialog";
import Item from "src/pages/Reports/StackItem";

export default function Reports() {
  const {
    state: { counterList },
  } = useApp();
  const { columns } = useTableColumns();

  return (
    <Stack direction="column" spacing={2}>
      <Item>
        عملکرد کلی کیوسک‌های نویرا
        <OverallChart />
      </Item>
      <Item>
        <Table data={counterList} columns={columns} loaded={true} />
        <ReportDialog />
      </Item>
    </Stack>
  );
}
