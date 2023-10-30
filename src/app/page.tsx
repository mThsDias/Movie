"use client";
import React from "react";
import { Trending } from "@/components/Treding/Trending";
import { NavBar } from "@/components/NavBar/NavBar";
import * as S from "./styles";
import { ComponentInput } from "@/components/NavBar/Search/ComponentInput";

export default function Home() {
  return (
    <main>
      <NavBar />
      <ComponentInput />
      <S.Container>
        <Trending />
      </S.Container>
    </main>
  );
}
