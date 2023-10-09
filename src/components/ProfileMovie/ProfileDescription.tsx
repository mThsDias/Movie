import React from "react";
import * as S from "./styles";
import { Movie } from "@/context/movie/types";
import { MovieContext } from "@/context/ContextMovie";
import { useParams } from "next/navigation";
export const apiKey =
    process.env.REACT_APP_API_KEY || "dcf6fe444e49bcbe4d8f215076000be9";

type ProfileDescriptionProps = {
    movie: Movie;
};

export const ProfileDescription = ({ movie }: ProfileDescriptionProps) => {
    const [creditsDirector, setCreditsDirector] = React.useState({} as Movie);

    const { trending } = React.useContext(MovieContext);
    const params = useParams();
    const { id } = params;
    async function fetchCreditsMovie() {
        trending.find((movie) => movie.id === Number(id)) as Movie;

        try {
            const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US;`;
            const response = await fetch(creditsUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });

            const data = await response.json();

            const creditsDirector = data.crew.find(
                (movie: { job: string }) => movie.job === "Director"
            );

            setCreditsDirector(creditsDirector);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchCreditsMovie();
    }, []);

    return (
        <>
            {movie && (
                <>
                    <S.SinopseContainer>
                        <h3>Sinopse</h3>
                        <p>{movie.overview}</p>
                    </S.SinopseContainer>
                    <S.CastContainer>
                        <h3>Diretor</h3>
                        <p>{creditsDirector.name}</p>
                    </S.CastContainer>
                </>
            )}
        </>
    );
};
