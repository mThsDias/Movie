"use client";

import React from "react";
import { ImageUrl } from "@/components/CardMovie/ImageUrl";
import { NavBar } from "@/components/NavBar/NavBar";
import { MovieContext } from "@/context/ContextMovie";
import { Movie } from "@/context/movie/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PercentageRounded } from "@/components/CardMovie/PercentageRounded";
import * as S from "./styles";

export const apiKey = process.env.REACT_APP_API_KEY;

export default function DescriptionMovie() {
    const [trailerKey, setTrailerKey] = React.useState("");
    const [credits, setCredits] = React.useState({} as Movie);

    const params = useParams();
    const { id } = params;

    const { trending } = React.useContext(MovieContext);

    const movie = trending.find((movie) => movie.id === Number(id)) as Movie;

    async function fetchTrailerMovie() {
        try {
            const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
            const response = await fetch(trailerUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });

            const data = await response.json();

            const trailer = data.results.find(
                (movie: { type: string; key: string }) =>
                    movie.type === "Trailer"
            );

            setTrailerKey(trailer.key);
        } catch (error) {
            console.log(error);
        }
    }

    const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;

    async function fetchCreditsMovie() {
        try {
            const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US;`;
            const response = await fetch(creditsUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });

            const data = await response.json();

            const credits = data.crew.find(
                (movie: { job: string }) => movie.job === "Director"
            );

            setCredits(credits);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchCreditsMovie();
    }, []);

    React.useEffect(() => {
        fetchTrailerMovie();
    }, []);

    return (
        <>
            <NavBar />
            <S.ContentMovie>
                <Link style={{ color: "#fff" }} href="/">
                    HOME
                </Link>
                <S.Container>
                    <S.ContentMovieDescription>
                        <div>
                            <ImageUrl
                                movie={movie}
                                isVoteAverageActive={false}
                                w={300}
                                h={450}
                            />
                        </div>
                        <div>
                            {movie && (
                                <>
                                    <h1>{movie.title || movie.name}</h1>
                                    <p>{movie.release_date}</p>
                                    <p>{movie.runtime}</p>
                                    <S.PercentageContainer>
                                        <S.CircleContainer>
                                            <PercentageRounded
                                                voteAverage={movie.vote_average}
                                            />
                                        </S.CircleContainer>
                                        <p>Avaliação dos usuários</p>
                                    </S.PercentageContainer>
                                    <S.SinopseContainer>
                                        <h3>Sinopse</h3>
                                        <p>{movie.overview}</p>
                                    </S.SinopseContainer>
                                    <div>
                                        {credits && (
                                            <>
                                                <h3>Diretor</h3>
                                                <p>{credits.name}</p>
                                            </>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </S.ContentMovieDescription>
                </S.Container>
            </S.ContentMovie>
        </>
    );
}
