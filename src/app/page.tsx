"use client";
import React from "react";
import { MovieContext } from "@/context/ContextMovie";
import { PopularMovie } from "@/components/PopularMovie/PopularMovie";

export default function Home() {
    const { movies } = React.useContext(MovieContext);
    return (
        <main>
            <div>
                <PopularMovie movies={movies} />
            </div>
        </main>
    );
}
