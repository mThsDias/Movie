"use client";

import type { CastProviderProps, CastContextValue } from "./types";
import React, { createContext } from "react";
import { useCast } from "../hooks/useCast";

export const CastContext = createContext({} as CastContextValue);

export function CastProvider({ children }: CastProviderProps) {
  const { cast, error, loading } = useCast();

  return (
    <CastContext.Provider value={{ cast, error, loading }}>
      {children}
    </CastContext.Provider>
  );
}
