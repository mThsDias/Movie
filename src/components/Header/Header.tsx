import React from "react";
import { Movie } from "@/context/movie/types";
import "./Header.css";
import { BsThreeDots, BsStarFill, BsListUl } from "react-icons/bs";

export const Header = ({ topRated }: { topRated: Movie }) => {
    const base_url_photo = "https://image.tmdb.org/t/p/";

    const [active, setActive] = React.useState(false);

    if (!topRated || !topRated.poster_path) return null;
    const imageUrl = `${base_url_photo}w500${topRated.poster_path}`;

    return (
        <header className="header-container-img">
            <button onClick={() => setActive(!active)}>
                <BsThreeDots />
                {active && (
                    <ul>
                        <li>
                            <span>
                                <BsListUl />
                                Adicionar à lista
                            </span>
                        </li>
                        <li>
                            <span>
                                <BsStarFill />
                                Sua avaliação
                            </span>
                        </li>
                    </ul>
                )}
            </button>
            <img src={imageUrl} alt={topRated.title} />
        </header>
    );
};
