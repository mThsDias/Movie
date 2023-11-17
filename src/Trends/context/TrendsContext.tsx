"use client";

import React, { createContext } from "react";
import { useTrendsDay } from "../TrendsOfTheDay/hooks/useTrendsDay";
import { useTrendsWeek } from "../TrendsOfTheWeek/hooks/useTrendsWeek";

interface TrendingsProviderProps {
  children: React.ReactNode;
}

interface TrendsContextValue {
  trendsDay: Trends[];
  trendsWeek: Trends[];
  loadingTrendsDay: boolean;
  errorTrendsDay: string | null;
  loadingTrendsWeek: boolean;
  errorTrendsWeek: string | null;
}

interface Trends {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export const TrendsContext = createContext({} as TrendsContextValue);

export function TrendingsProvider({ children }: TrendingsProviderProps) {
  const { trendsDay, errorTrendsDay, loadingTrendsDay } = useTrendsDay();
  const { trendsWeek, errorTrendsWeek, loadingTrendsWeek } = useTrendsWeek();

  return (
    <TrendsContext.Provider
      value={{
        trendsDay,
        trendsWeek,
        errorTrendsWeek,
        loadingTrendsWeek,
        errorTrendsDay,
        loadingTrendsDay,
      }}
    >
      {children}
    </TrendsContext.Provider>
  );
}
