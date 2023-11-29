"use client";
import React from "react";

import * as S from "./styles";
import { Trends } from "@/Trends";
import { Poster } from "@/components/Header";

export default function Home() {
  return (
    <main style={{ background: "#0f0f0f" }}>
      <Poster />
      <S.Container>
        <Trends />
      </S.Container>
    </main>
  );
}
