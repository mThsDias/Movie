"use client";

import type { TrailerTvProviderProps, TrailerTvContextValue } from "./types";
import React, { createContext } from "react";
import { useTrailerTv } from "../hooks/useTrailerTv";

export const TrailerTvContext = createContext({} as TrailerTvContextValue);

export function TrailerTvProvider({ children }: TrailerTvProviderProps) {
  const { trailerTv, error, loading } = useTrailerTv();

  return (
    <TrailerTvContext.Provider value={{ trailerTv, error, loading }}>
      {children}
    </TrailerTvContext.Provider>
  );
}
