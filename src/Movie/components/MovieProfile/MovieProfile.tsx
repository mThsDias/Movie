import React, { useContext } from "react";

import { MovieContext } from "@/Movie/context/MovieContext";
import { ProfileComponent } from "./ProfileComponent";

export const MovieProfile = () => {
  const { movie, error, loading } = useContext(MovieContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <main>{movie ? <ProfileComponent /> : <h1>Movie not found</h1>}</main>
    </>
  );
};
