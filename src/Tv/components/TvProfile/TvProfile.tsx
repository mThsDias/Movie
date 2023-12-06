import React, { useContext } from "react";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Header/NavBar";
import { ProfileComponent } from "./ProfileComponent";
import { TvContext } from "@/Tv/context/TvContext";

export const TvProfile = () => {
  const { tv, error, loading } = useContext(TvContext);

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
      <main>{tv ? <ProfileComponent /> : <h1>Movie not found</h1>}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
