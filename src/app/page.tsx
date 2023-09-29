"use client";
import React from "react";
import { Trending } from "@/components/Treding/Trending";
import { NavBar } from "@/components/NavBar/NavBar";
import * as S from "./styles";

export default function Home() {
    return (
        <main>
            <NavBar />
            <S.Container>
                <Trending />
            </S.Container>
        </main>
    );
}
