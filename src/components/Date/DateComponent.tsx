import React from "react";

interface DateProps {
  date: string;
  formatDate?: (date: string) => string;
}

export const DateComponent = ({ date, formatDate }: DateProps) => {
  return <>{date ? formatDate?.(date) : "Data Indisponível"}</>;
};
