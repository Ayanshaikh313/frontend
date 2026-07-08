"use client";

import { Database, Globe, Lightbulb, Activity } from "lucide-react";

import StatCard from "./stat-card";
import { useDashboard } from "@/hooks/useDashboard";

export default function StatsGrid() {
  const { dashboard, loading, error } = useDashboard();

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="h-40 rounded-2xl border animate-pulse bg-muted" />
        <div className="h-40 rounded-2xl border animate-pulse bg-muted" />
        <div className="h-40 rounded-2xl border animate-pulse bg-muted" />
        <div className="h-40 rounded-2xl border animate-pulse bg-muted" />
      </div>
    );
  }

  if (error || !dashboard) {
    return (
      <div className="rounded-xl border border-destructive p-6 text-center">
        Failed to load dashboard data.
      </div>
    );
  }

  const stats = [
    {
      title: "Total Records",
      value: dashboard.kpis.totalRecords,
      description: "Records available",
      icon: <Database className="h-7 w-7" />,
    },
    {
      title: "Countries",
      value: dashboard.kpis.totalCountries,
      description: "Countries represented",
      icon: <Globe className="h-7 w-7" />,
    },
    {
      title: "Topics",
      value: dashboard.kpis.totalTopics,
      description: "Different topics",
      icon: <Lightbulb className="h-7 w-7" />,
    },
    {
      title: "Avg Intensity",
      value: dashboard.kpis.averageIntensity,
      description: "Average intensity",
      icon: <Activity className="h-7 w-7" />,
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard key={item.title} {...item} />
      ))}
    </section>
  );
}