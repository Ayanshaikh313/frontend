"use client";

import ChartCard from "./chart-card";
import DashboardBarChart from "./bar-chart";

interface Props {
  data: {
    _id: string;
    value: number;
  }[];
}

export default function CountryChart({ data }: Props) {
  return (
    <ChartCard
      title="Top Countries"
      description="Top 10 countries"
    >
      <DashboardBarChart
        data={data}
        xKey="_id"
        yKey="value"
      />
    </ChartCard>
  );
}