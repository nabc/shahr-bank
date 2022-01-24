import { useTheme } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import convertNumberCharacters from "src/utils/convertNumberCharacters";
const data = [
  {
    name: "۱۱/۰۱",
    issue: 5,
    cancellation: 3,
  },
  {
    name: "۱۱/۰۲",
    issue: 8,
    cancellation: 4,
  },
  {
    name: "۱۱/۰۳",
    issue: 9,
    cancellation: 3,
  },
  {
    name: "۱۱/۰۴",
    issue: 2,
    cancellation: 6,
  },
  {
    name: "۱۱/۰۵",
    issue: 4,
    cancellation: 4,
  },
  {
    name: "۱۱/۰۶",
    issue: 1,
    cancellation: 5,
  },
  {
    name: "۱۱/۰۷",
    issue: 7,
    cancellation: 1,
  },
];

export default function OverallChart() {
  const {
    palette: { success, error },
  } = useTheme();

  return (
    <ResponsiveContainer height={300}>
      <LineChart
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
        <Line name="ابطال" type="monotone" dataKey="cancellation" stroke={error.main} activeDot={{ r: 8 }} />
        <Line name="صدور" type="monotone" dataKey="issue" stroke={success.main} />
      </LineChart>
    </ResponsiveContainer>
  );
}
