"use client";

import React from "react";
import { TvProfile } from "@/Tv/components/TvProfile/TvProfile";
import { TvProvider } from "@/Tv/context/TvContext";
import { CastTvProvider } from "@/Tv/context/CastTvContext";
import { TrailerTvProvider } from "@/Tv/context/TrailerTvContext";

export default function DescriptionMovie() {
  return (
    <main>
      <TrailerTvProvider>
        <CastTvProvider>
          <TvProvider>
            <TvProfile />
          </TvProvider>
        </CastTvProvider>
      </TrailerTvProvider>
    </main>
  );
}
