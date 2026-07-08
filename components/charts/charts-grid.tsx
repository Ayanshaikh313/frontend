"use client";

import { useDashboard } from "@/hooks/useDashboard";

import IntensityChart from "./intensity-chart";
import RegionChart from "./region-chart";
import SectorChart from "./sector-chart";
import CountryChart from "./country-chart";

export default function ChartsGrid() {
  const { dashboard, loading, error } = useDashboard();

  if (loading) {
    return (
      <div className="grid gap-6 lg:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-[350px] rounded-2xl border bg-muted animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error || !dashboard) {
    return (
      <div className="rounded-xl border border-destructive p-6">
        Failed to load chart data.
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <IntensityChart
        data={dashboard.charts.intensityByTopic}
      />

      <RegionChart
        data={dashboard.charts.regionDistribution}
      />

      <SectorChart
        data={dashboard.charts.sectorDistribution}
      />

      <CountryChart
        data={dashboard.charts.countryDistribution}
      />
    </div>
  );
}