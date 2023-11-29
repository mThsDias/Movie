export interface TrendingsProviderProps {
  children: React.ReactNode;
}

export interface TrendsContextValue {
  trendsDay: Trends[];
  trendsWeek: Trends[];
  loadingTrendsDay: boolean;
  errorTrendsDay: string | null;
  loadingTrendsWeek: boolean;
  errorTrendsWeek: string | null;
}

export interface Trends {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  first_air_date: string;
  media_type: string;
}
