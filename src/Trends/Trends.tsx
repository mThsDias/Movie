import React from "react";
import { TrendsDay } from "./TrendsOfTheDay/TrendsDay";
import { TrendingsProvider } from "./context/TrendsContext";

export const Trends = () => {
  return (
    <TrendingsProvider>
      <TrendsDay />
    </TrendingsProvider>
  );
};
