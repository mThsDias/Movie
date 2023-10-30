"use client";

import { NavBar } from "@/components/NavBar/NavBar";
import { MovieContext } from "@/context/ContextMovie";
import Link from "next/link";
import React from "react";

export default function DescriptionMovie() {
  const { searchResult } = React.useContext(MovieContext);

  return (
    <>
      <NavBar />
      <Link style={{ color: "#000" }} href="/">
        Home
      </Link>
      {searchResult ? (
        <>
          {searchResult.map((movie) => (
            <h1 key={movie.id}>{movie.title}</h1>
          ))}
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
}
