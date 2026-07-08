export interface KPI {
  totalRecords: number;
  totalCountries: number;
  totalTopics: number;
  averageIntensity: number;
}

export interface DashboardCharts {
  intensityByTopic: any[];
  relevanceByRegion: any[];
  likelihoodByCountry: any[];
  sectorDistribution: any[];
}

export interface DashboardResponse {
  success: boolean;
  data: {
    kpis: KPI;
    charts: DashboardCharts;
  };
}