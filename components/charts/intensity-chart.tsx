"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartCard from "./chart-card";

interface Props {
  data: {
    _id: string;
    intensity: number;
  }[];
}

export default function IntensityChart({ data }: Props) {
  return (
    <ChartCard
      title="Average Intensity by Topic"
      description="Average intensity across all topics"
    >
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="_id"
            tick={{ fontSize: 12 }}
          />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="intensity"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}