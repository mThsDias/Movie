"use client";

import React from "react";

import { MovieProvider } from "@/Movie/context/MovieContext";
import { MovieProfile } from "@/Movie/components/MovieProfile/MovieProfile";

export default function DescriptionMovie() {
  return (
    <>
      <MovieProvider>
        <MovieProfile />
      </MovieProvider>
    </>
  );
}
