"use client";
import React from "react";
import { Trending } from "@/components/Treding/Trending";
import { NavBar } from "@/components/NavBar/NavBar";
import Container from "@mui/material/Container";

export default function Home() {
    return (
        <main>
            <NavBar />
            <Container maxWidth="lg">
                <Trending />
            </Container>
        </main>
    );
}
