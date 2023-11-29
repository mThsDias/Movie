"use client";

import type { CastTvProviderProps, CastTvContextValue } from "./types";
import React, { createContext } from "react";
import { useCastTv } from "../hooks/useCastTv";

export const CastTvContext = createContext({} as CastTvContextValue);

export function CastTvProvider({ children }: CastTvProviderProps) {
  const { castTv, error, loading } = useCastTv();

  return (
    <CastTvContext.Provider value={{ castTv, error, loading }}>
      {children}
    </CastTvContext.Provider>
  );
}
