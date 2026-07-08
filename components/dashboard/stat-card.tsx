"use client";

import CountUp from "react-countup";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: number;
  description: string;
  icon: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  description,
  icon,
}: StatCardProps) {
  return (
    <Card className="rounded-2xl p-6 shadow-sm transition-all hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>{icon}</div>

        <p className="text-xs text-muted-foreground">
          Live
        </p>
      </div>

      <h3 className="mt-6 text-sm text-muted-foreground">
        {title}
      </h3>

      <h2 className="mt-2 text-4xl font-bold">
        <CountUp end={value} duration={2} separator="," />
      </h2>

      <p className="mt-3 text-sm text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}