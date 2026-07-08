"use client";

import DashboardHeader from "./dashboard-header";
import StatsGrid from "./stats-grid";
import ChartsGrid from "../charts/charts-grid";

export default function DashboardContent() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <StatsGrid />
      <ChartsGrid />
    </div>
  );
}