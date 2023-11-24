"use client";

import type { TrailerProviderProps, TrailerContextValue } from "./types";
import React, { createContext } from "react";
import { useTrailer } from "../hooks/useTrailer";

export const TrailerContext = createContext({} as TrailerContextValue);

export function TrailerProvider({ children }: TrailerProviderProps) {
  const { trailer, error, loading } = useTrailer();

  return (
    <TrailerContext.Provider value={{ trailer, error, loading }}>
      {children}
    </TrailerContext.Provider>
  );
}
