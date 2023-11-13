"use client";

import Link from "next/link";
import React from "react";
import * as S from "./styles";

import { SearchProvider } from "./context/SearchContext";
import { NavBar } from "@/components/NavBar/NavBar";
import { FilterMovie } from "./FilterMovie";

export default function DescriptionMovie() {
  return (
    <>
      <NavBar />
      <Link style={{ color: "#000" }} href="/">
        Home
      </Link>
      <SearchProvider>
        <S.BoxCardAndFilter>
          <FilterMovie />
        </S.BoxCardAndFilter>
      </SearchProvider>
    </>
  );
}
