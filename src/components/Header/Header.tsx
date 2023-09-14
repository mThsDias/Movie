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
            <span
                className="container-nav-card"
                onClick={() => setActive(!active)}
            >
                <BsThreeDots
                    style={{
                        background: "#ffffff5b",
                        borderRadius: "50%",
                        width: "17px",
                        height: "17px",
                        position: "absolute",
                        left: "9%",
                        top: "2%",
                        cursor: "pointer",
                    }}
                />
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
            </span>
            <img src={imageUrl} alt={topRated.title} />
            <span className="container-vote-average">
                <span className="vote-average">{`${(
                    topRated.vote_average * 10
                ).toFixed(0)}%`}</span>
            </span>
        </header>
    );
};
