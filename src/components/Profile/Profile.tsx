"use client";

import { MovieContext } from "@/context/ContextMovie";
import { useParams } from "next/navigation";
import React from "react";
import { SectionProfile } from "../ProfileMovie/SectionProfile";

export const Profile = () => {
  const params = useParams();
  const { id } = params;

  const { ListTv, ListMovie } = React.useContext(MovieContext);

  const movie =
    ListTv.find((movie) => movie.id === Number(id)) ||
    ListMovie.find((movie) => movie.id === Number(id)) ||
    null;

  return (
    <>{movie ? <SectionProfile movie={movie} /> : <p>Movie not found</p>}</>
  );
};
