import React from "react";
import "./Category.css";
import { Movie } from "@/context/movie/interface";

export const Category = ({ movie }: { movie: Movie }) => {
    if (!movie) return null;
    return (
        <>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <span>{movie.release_date}</span>
        </>
    );
};
