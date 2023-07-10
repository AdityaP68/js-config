import React from "react";
import styles from "./BarChartCard.module.scss";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: 2020,
    female: 4000,
    male: 2400,
  },
  {
    name: 2021,
    female: 3000,
    male: 1398,
  },
  {
    name: 2022,
    female: 2000,
    male: 9800,
  },
  {
    name: 2023,
    female: 2780,
    male: 3908,
  },
  {
    name: "Page E",
    female: 1890,
    male: 4800,
  },
  {
    name: "Page F",
    female: 12390,
    male: 13800,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
  {
    name: "Page G",
    female: 3490,
    male: 4300,
  },
];

function BarChartCard({ graphData }) {
  //add more y values to the y-axis
  const extraSpace = 1200; //controls frequency

  const maleValues = data.map((entry) => entry.male);
  const femaleValues = data.map((entry) => entry.female);
  const minValue = Math.min(...maleValues, ...femaleValues);
  const maxValue = Math.max(...maleValues, ...femaleValues);

  const minYValue = Math.floor(minValue) - extraSpace;
  const maxYValue = Math.ceil(maxValue) + extraSpace;

  // Generate an array of y-axis values to be displayed at desired intervals
  const tickCount = 6; // Adjust the number values

  const tickInterval = Math.ceil((maxYValue - minYValue) / tickCount);
  const ticks = Array.from(
    { length: tickCount + 1 },
    (_, index) => minYValue + index * tickInterval
  );

  return (
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
        <YAxis
          domain={[minYValue, maxYValue]}
          tick={{ fontSize: 10 }}
          ticks={ticks}
        />
        <Tooltip
          contentStyle={{
            background: "#333",
            fontSize: "12px",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        />
        <Legend
          wrapperStyle={{
            position: "absolute",
            top: "10px",
            right: "0",
            fontSize: 11,
            width: "130px",
          }}
        />
        <Bar dataKey="male" fill="#3F74D6" />
        <Bar dataKey="female" fill="#15273" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartCard;
