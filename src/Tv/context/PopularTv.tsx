"use client";

import React, { createContext } from "react";
import { usePopularTv } from "../hooks/usePopularTv";
import type { PopularTvContextValue, PopularTvProviderProps } from "./types";

export const PopularTvContext = createContext({} as PopularTvContextValue);

export function PopularTvProvider({ children }: PopularTvProviderProps) {
  const { popularTv, loading, error } = usePopularTv();

  return (
    <PopularTvContext.Provider value={{ popularTv, loading, error }}>
      {children}
    </PopularTvContext.Provider>
  );
}
