import React from "react";
import { Movie } from "@/context/movie/types";
import "./Card.css";
import { DropdownMenu } from "./DropdownMenu";
import { IconThreeDots } from "./IconThreeDots";

export const Card = ({ movie }: { movie: Movie }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toogleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const base_url_photo = "https://image.tmdb.org/t/p/";
    const imageUrl = `${base_url_photo}w500${movie.poster_path}`;

    return (
        <section className="container-card-img">
            <IconThreeDots onClick={toogleMenu} />
            <DropdownMenu isOpen={menuOpen} />
            <img src={imageUrl} alt={movie.title} />
        </section>
    );
};
