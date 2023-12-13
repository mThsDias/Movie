"use client";

import React from "react";

import * as S from "./styles";
import { Trends } from "@/Trends";
import { Poster } from "@/components/Header";
import { Popular } from "@/Movie/components/Popular/Popular";

export default function Home() {
  return (
    <main style={{ background: "#0f0f0f" }}>
      <Poster />
      <S.Container>
        <Trends />
        <Popular />
      </S.Container>
    </main>
  );
}
