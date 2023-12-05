"use client";

import { usePopular } from "../hooks/usePopular";
import type { PopularContextValue, PopularProviderProps } from "./types";
import React, { createContext } from "react";

export const PopularContext = createContext({} as PopularContextValue);

export function PopularProvider({ children }: PopularProviderProps) {
  const { popular, loading, error } = usePopular();

  return (
    <PopularContext.Provider value={{ popular, loading, error }}>
      {children}
    </PopularContext.Provider>
  );
}
