"use client";
import React from "react";

import * as S from "./styles";
import { Trends } from "@/Trends";
import { Poster } from "@/components/Header";
import { PopularProvider } from "@/Movie/context/PopularContext";
import { Popular } from "@/Movie/components/Popular/Popular";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0f0f0f" }}>
      <Poster />
      <S.Container>
        <Trends />
        <PopularProvider>
          <Popular />
        </PopularProvider>
      </S.Container>
      <Footer />
    </main>
  );
}
