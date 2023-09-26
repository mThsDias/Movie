import { Movie } from "@/context/movie/types";
import React from "react";
import "./Input.css";

type SearchProps = {
    movie: Movie;
};

export const Search = ({ movie }: SearchProps) => {
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
