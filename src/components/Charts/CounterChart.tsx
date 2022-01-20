import { useTheme } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import convertNumberCharacters from "src/utils/convertNumberCharacters";

const data = [
  {
    name: "۱۴۰۰/۱۰/۰۱",
    issue: 5,
    cancellation: -3,
  },
  {
    name: "۱۴۰۰/۱۰/۰۲",
    issue: 8,
    cancellation: -4,
  },
  {
    name: "۱۴۰۰/۱۰/۰۳",
    issue: 9,
    cancellation: -3,
  },
  {
    name: "۱۴۰۰/۱۰/۰۴",
    issue: 2,
    cancellation: -6,
  },
  {
    name: "۱۴۰۰/۱۰/۰۵",
    issue: 4,
    cancellation: -4,
  },
  {
    name: "۱۴۰۰/۱۰/۰۶",
    issue: 1,
    cancellation: -5,
  },
  {
    name: "۱۴۰۰/۱۰/۰۷",
    issue: 7,
    cancellation: -1,
  },
];

export default function CounterChart() {
  const {
    palette: { success, error },
  } = useTheme();
  return (
    <ResponsiveContainer height={300}>
      <BarChart
        data={data}
        style={{ direction: "ltr" }}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(value: any) => {
            return convertNumberCharacters(value, "fa");
          }}
        />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar name="ابطال" dataKey="cancellation" fill={error.main} />
        <Bar name="صدور" dataKey="issue" fill={success.main} />
      </BarChart>
    </ResponsiveContainer>
  );
}
