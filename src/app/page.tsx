"use client";
import React from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import * as S from "./styles";
import { ComponentInput } from "@/components/NavBar/Search/ComponentInput";
import { Trends } from "@/Trends";

export default function Home() {
  return (
    <main>
      <NavBar />
      <ComponentInput />
      <S.Container>
        <Trends />
      </S.Container>
    </main>
  );
}
