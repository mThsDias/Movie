"use client";

import React from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import Link from "next/link";

import { MovieProvider } from "@/Movie/context/MovieContext";
import { MovieProfile } from "@/Movie/components/MovieProfile/MovieProfile";

export default function DescriptionMovie() {
  return (
    <>
      <NavBar />
      <Link style={{ color: "#000" }} href="/">
        Home
      </Link>

      <MovieProvider>
        <MovieProfile />
      </MovieProvider>
    </>
  );
}
