import { useParams } from "next/navigation";
import React, { useContext } from "react";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ProfileComponent } from "./ProfileComponent";
import { TvContext } from "@/Tv/context/TvContext";

export const TvProfile = () => {
  const { tv, error, loading } = useContext(TvContext);

  const params = useParams();
  const { id } = params;

  const tvs = tv?.find((movie) => movie?.id === Number(id)) || null;

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
      <main>{tvs ? <ProfileComponent /> : <h1>Movie not found</h1>}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
