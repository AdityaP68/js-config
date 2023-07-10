import React from "react";
import styles from "./PieChartCard.module.scss";
import { PieChart, ResponsiveContainer, Pie, Cell, Label } from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];

function PieChartCard() {
  return (
    <ResponsiveContainer>
      <PieChart>
      <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          labelLine={false}
        >
          {
            data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#8884d8" />
            ))
          }
          {
            data01.map((entry, index) => (
              <Label
                key={`label-${index}`}
                value={`${entry.name}: ${entry.value}`}
                position="inside"
                fontSize={12}
                fill="#fff"
              />
            ))
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartCard;
