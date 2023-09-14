"use client";
import React from "react";
import { CardComponent } from "@/components/CardMovie/CardComponent";
import { HeaderCardComponent } from "@/components/Header/HeaderCardComponent";

export default function Home() {
    return (
        <main>
            <CardComponent />
            <HeaderCardComponent />
        </main>
    );
}
