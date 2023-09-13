import { Movie } from "@/context/movie/types";
import React from "react";
import "./InputSearch.css";

export const Search = ({ movie }: { movie: Movie }) => {
    if (!movie || !movie.poster_path) return null;
    return (
        <div>
            <img
                className="img-search"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
            />
        </div>
    );
};
