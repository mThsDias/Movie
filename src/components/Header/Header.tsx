import React from "react";
import { Movie } from "@/context/movie/types";
import "./Header.css";

export const Header = ({ topRated }: { topRated: Movie }) => {
    const base_url_photo = "https://image.tmdb.org/t/p/";

    if (!topRated || !topRated.poster_path) return null;
    const imageUrl = `${base_url_photo}w500${topRated.poster_path}`;

    return (
        <header className="header-container-img">
            <img src={imageUrl} alt={topRated.title} />
        </header>
    );
};
