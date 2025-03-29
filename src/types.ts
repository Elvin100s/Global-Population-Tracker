export interface CountryData {
  country: string;
  code: string;
  population: number;
  yearlyChange: number;
  density: number;
  area: number;
  netChange: number;
  languages?: string[];
  flagUrl?: string;
}

export interface PopulationStats {
  total: number;
  yearly: {
    births: number;
    deaths: number;
  };
  today: {
    births: number;
    deaths: number;
  };
}

export interface CountryDetails {
  historicalPopulation: { year: number; population: number }[];
  projectedGrowth: { year: number; population: number }[];
}