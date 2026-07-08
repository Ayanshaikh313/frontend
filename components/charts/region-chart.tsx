"use client";

import ChartCard from "./chart-card";
import DashboardBarChart from "./bar-chart";

interface Props {
  data: {
    _id: string;
    value: number;
  }[];
}

export default function RegionChart({ data }: Props) {
  return (
    <ChartCard
      title="Region Distribution"
      description="Records by region"
    >
      <DashboardBarChart
        data={data}
        xKey="_id"
        yKey="value"
      />
    </ChartCard>
  );
}