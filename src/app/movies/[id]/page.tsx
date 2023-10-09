"use client";

import React from "react";
import { ImageUrl } from "@/components/CardMovie/ImageUrl";
import { NavBar } from "@/components/NavBar/NavBar";
import { MovieContext } from "@/context/ContextMovie";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PercentageRounded } from "@/components/CardMovie/PercentageRounded";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import * as S from "./styles";
import { MovieInfo } from "@/components/TitleMovie/MovieInfo";
import { SectionProfile } from "@/components/ProfileMovie/SectionProfile";
import { Movie } from "@/context/movie/types";

export const apiKey =
    process.env.REACT_APP_API_KEY || "dcf6fe444e49bcbe4d8f215076000be9";

export default function DescriptionMovie() {
    const [trailerKey, setTrailerKey] = React.useState("");

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

    React.useEffect(() => {
        fetchTrailerMovie();
    }, []);

    return (
        <>
            <NavBar />
            <Link style={{ color: "#000" }} href="/">
                Home
            </Link>
            <SectionProfile movie={movie} />
        </>
    );
}
