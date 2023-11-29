"use client";

import type { TvContextValue, TvProviderProps } from "./types";
import React, { createContext } from "react";
import { useTv } from "../hooks/useTv";

export const TvContext = createContext({} as TvContextValue);

export function TvProvider({ children }: TvProviderProps) {
  const { tv, loading, error } = useTv();

  return (
    <TvContext.Provider value={{ tv, loading, error }}>
      {children}
    </TvContext.Provider>
  );
}
