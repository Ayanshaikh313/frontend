"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Props {
  data: any[];
  xKey: string;
  yKey: string;
}

export default function DashboardBarChart({
  data,
  xKey,
  yKey,
}: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey={xKey}
          tick={{ fontSize: 12 }}
        />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey={yKey}
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}