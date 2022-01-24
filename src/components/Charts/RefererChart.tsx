import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTheme } from "@mui/material";
import convertNumberCharacters from "src/utils/convertNumberCharacters";

const data = [
  {
    name: "۱۴۰۰/۱۱/۰۱",
    morningShift: 3,
    nightShift: 4,
  },
  {
    name: "۱۴۰۰/۱۱/۰۲",
    morningShift: 1,
    nightShift: 3,
  },
  {
    name: "۱۴۰۰/۱۱/۰۳",
    morningShift: 6,
    nightShift: 4,
  },
  {
    name: "۱۴۰۰/۱۱/۰۴",
    morningShift: 4,
    nightShift: 4,
  },
  {
    name: "۱۴۰۰/۱۱/۰۵",
    morningShift: 3,
    nightShift: 5,
  },
  {
    name: "۱۴۰۰/۱۱/۰۶",
    morningShift: 6,
    nightShift: 6,
  },
  {
    name: "۱۴۰۰/۱۱/۰۷",
    morningShift: 3,
    nightShift: 5,
  },
];

export default function RefererChart() {
  const {
    palette: { primary, info },
  } = useTheme();
  return (
    <ResponsiveContainer height={300}>
      <BarChart
        width={500}
        height={300}
        style={{ direction: "ltr" }}
        data={data}
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
        <Bar name="راهبر شیفت صبح" dataKey="nightShift" fill={primary.main} />
        <Bar name="راهبر شیف شب" dataKey="morningShift" fill={info.main} />
      </BarChart>
    </ResponsiveContainer>
  );
}
