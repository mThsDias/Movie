"use client";

import React from "react";

import { MovieProvider } from "@/Movie/context/MovieContext";
import { MovieProfile } from "@/Movie/components/MovieProfile/MovieProfile";
import { CastProvider } from "@/Movie/context/CastContext";

export default function DescriptionMovie() {
  return (
    <>
      <CastProvider>
        <MovieProvider>
          <MovieProfile />
        </MovieProvider>
      </CastProvider>
    </>
  );
}
