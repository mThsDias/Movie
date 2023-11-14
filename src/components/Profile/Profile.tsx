"use client";

import { MovieContext } from "@/context/ContextMovie";
import { useParams } from "next/navigation";
import React from "react";
import { SectionProfile } from "../ProfileMovie/SectionProfile";

export const Profile = () => {
  const params = useParams();
  const { id } = params;

  const { trendingWeekly, trending } = React.useContext(MovieContext);

  const movie =
    trendingWeekly?.find((movie) => movie.id === Number(id)) ||
    trending?.find((movie) => movie.id === Number(id)) ||
    null;

  return (
    <>{movie ? <SectionProfile movie={movie} /> : <p>Movie not found</p>}</>
  );
};
