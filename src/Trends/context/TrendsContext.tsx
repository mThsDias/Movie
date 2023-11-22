"use client";

import React, { createContext } from "react";
import type { TrendsContextValue, TrendingsProviderProps } from "./types";
import { useTrendsDay } from "../TrendsOfTheDay/hooks/useTrendsDay";
import { useTrendsWeek } from "../TrendsOfTheWeek/hooks/useTrendsWeek";

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
