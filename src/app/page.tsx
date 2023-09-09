"use client";
import React from "react";
import { MovieContext } from "@/context/ContextMovie";
import { Card } from "@/components/CardMovie/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";

export default function Home() {
    const { movies } = React.useContext(MovieContext);
    return (
        <main>
            <h1>Home</h1>
            <div className="container">
                <h2>Em Alta</h2>

                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </main>
    );
}
