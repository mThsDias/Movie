"use client";
import React from "react";

import * as S from "./styles";
import { Trends } from "@/Trends";

export default function Home() {
  return (
    <main>
      <S.Container>
        <Trends />
      </S.Container>
    </main>
  );
}
