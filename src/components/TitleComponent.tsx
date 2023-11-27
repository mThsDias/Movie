import React from "react";

import { Movie } from "@/Movie/context/types";
import { Trends } from "@/Trends/context/types";

interface TitleProps {
  title: string | Trends | Movie;
}

export const TitleComponent = ({ title }: TitleProps) => {
  const typeTitle =
    typeof title === "string" ? title : title.title || title.name;

  return <>{typeTitle}</>;
};
