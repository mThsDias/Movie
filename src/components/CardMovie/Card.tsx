import React from "react";
import { Movie } from "@/context/movie/types";
import { BsThreeDots, BsStarFill, BsListUl } from "react-icons/bs";
import "./Card.css";

export const Card = ({ movie }: { movie: Movie }) => {
    const base_url_photo = "https://image.tmdb.org/t/p/";
    const imageUrl = `${base_url_photo}w500${movie.poster_path}`;

    const [active, setActive] = React.useState(false);

    if (!movie || !movie.poster_path) return null;
    return (
        <section className="container-card-img">
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
            <img src={imageUrl} alt={movie.title} />
            <span className="container-vote-average">
                <span className="vote-average">
                    {`${(movie.vote_average * 10).toFixed(0)}%`}
                </span>
            </span>
        </section>
    );
};
