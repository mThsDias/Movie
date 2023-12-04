import { useParams } from "next/navigation";
import React, { useContext } from "react";

import { MovieContext } from "@/Movie/context/MovieContext";
import { ProfileComponent } from "./ProfileComponent";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Header/NavBar";

export const MovieProfile = () => {
  const { movie, error, loading } = useContext(MovieContext);

  const params = useParams();
  const { id } = params;

  const movies = movie?.find((movie) => movie?.id === Number(id)) || null;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{movies ? <ProfileComponent /> : <h1>Movie not found</h1>}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
