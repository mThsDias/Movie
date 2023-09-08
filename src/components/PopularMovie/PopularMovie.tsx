"use client";
import React from "react";
import { Movie, MovieContextData } from "@/context/movie/interface";
import "./PopularMovie.css";

export const PopularMovie: React.FC<MovieContextData> = ({ movies }) => {
    const photoMovie = "https://image.tmdb.org/t/p/w500";

    return (
        <section className="container-movie-popular">
            {movies.map((movie: Movie) => (
                <div key={movie.id}>
                    <img
                        src={`${photoMovie}${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
            ))}
        </section>
    );
};
