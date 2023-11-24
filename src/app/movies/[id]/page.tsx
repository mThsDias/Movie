"use client";

import React from "react";

import { MovieProvider } from "@/Movie/context/MovieContext";
import { MovieProfile } from "@/Movie/components/MovieProfile/MovieProfile";
import { CastProvider } from "@/Movie/context/CastContext";
import { TrailerProvider } from "@/Movie/context/TrailerContext";

export default function DescriptionMovie() {
  return (
    <main>
      <TrailerProvider>
        <CastProvider>
          <MovieProvider>
            <MovieProfile />
          </MovieProvider>
        </CastProvider>
      </TrailerProvider>
    </main>
  );
}
