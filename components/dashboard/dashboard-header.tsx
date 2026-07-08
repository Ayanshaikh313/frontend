"use client";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Analytics Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Visualize and analyze Blackcoffer insights.
        </p>
      </div>
    </div>
  );
}