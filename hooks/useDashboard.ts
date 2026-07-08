"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { DashboardResponse } from "@/types/dashboard";

export function useDashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardResponse["data"] | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await api.get("/dashboard");

        setDashboard(res.data.data);
      } catch {
        setError("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return {
    dashboard,
    loading,
    error,
  };
}