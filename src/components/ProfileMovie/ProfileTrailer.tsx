import { MovieContext } from "@/context/ContextMovie";
import { Movie } from "@/context/movie/types";
import { useParams } from "next/navigation";
import React from "react";

export const apiKey =
    process.env.REACT_APP_API_KEY || "dcf6fe444e49bcbe4d8f215076000be9";

export const ProfileTrailer = () => {
    const [trailerKey, setTrailerKey] = React.useState("");

    const params = useParams();
    const { id } = params;

    const { trending } = React.useContext(MovieContext);

    trending.find((movie) => movie.id === Number(id)) as Movie;

    async function fetchTrailerMovie() {
        try {
            const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=pt-br`;
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
        <div>
            <h1>ProfileTrailer</h1>
            <iframe
                width="560"
                height="315"
                src={trailerUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
    );
};
