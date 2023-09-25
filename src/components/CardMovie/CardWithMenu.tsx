import React from "react";
import { Movie } from "@/context/movie/types";
import { DropdownMenu } from "./DropdownMenu";
import { IconThreeDots } from "./IconThreeDots";

type CardWithMenuProps = {
    movie: Movie;
};

export const CardWithMenu = ({ movie }: CardWithMenuProps) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <section className="container-card-img">
            <DropdownMenu isOpen={menuOpen} />
            <IconThreeDots onClick={toggleMenu} />
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
        </section>
    );
};
