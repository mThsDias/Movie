"use client";
import React from "react";
import { CardComponent } from "@/components/CardMovie/CardComponent";
import { Header } from "@/components/Header/Header";

export default function Home() {
    return (
        <main>
            <Header />
            <CardComponent />
        </main>
    );
}
