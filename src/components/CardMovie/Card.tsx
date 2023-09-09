import React from "react";
import { Movie } from "@/context/movie/types";
import "./Card.css";

export const Card = ({ movie }: { movie: Movie }) => {
    const base_url_photo = "https://image.tmdb.org/t/p/";
    const imageUrl = `${base_url_photo}w500${movie.poster_path}`;

    if (!movie || !movie.poster_path) return null;
    return (
        <section>
            <img className="img" src={imageUrl} alt={movie.title} />
        </section>
    );
};
