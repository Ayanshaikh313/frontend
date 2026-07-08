"use client";

import ChartCard from "./chart-card";
import DashboardBarChart from "./bar-chart";

export default function IntensityChart({
  data,
}: {
  data: any[];
}) {
  return (
    <ChartCard
      title="Average Intensity"
      description="Intensity by Topic"
    >
      <DashboardBarChart
        data={data}
        xKey="_id"
        yKey="intensity"
      />
    </ChartCard>
  );
}