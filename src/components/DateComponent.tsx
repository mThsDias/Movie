import React from "react";

import { Movie } from "@/Movie/context/types";
import { Trends } from "@/Trends/context/types";

interface DateProps {
  date: Movie | Trends;
  formatDate?: (date: string) => string;
}

export const DateComponent = ({ date, formatDate }: DateProps) => {
  const dateType = date.release_date || date.first_air_date;

  return <>{dateType ? formatDate?.(dateType) : "Data Indisponível"}</>;
};
