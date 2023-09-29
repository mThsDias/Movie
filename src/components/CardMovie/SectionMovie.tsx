import React from "react";
import { Movie } from "@/context/movie/types";
import { MovieInfo } from "../TitleMovie/MovieInfo";
import { ImageComponent } from "./ImageComponent";
import * as S from "./styles";

type SectionMovieProps = {
    cardMovie: Movie[];
};

export const SectionMovie = ({ cardMovie }: SectionMovieProps) => {
    return (
        <S.CustomBox>
            <S.InnerContainer>
                {cardMovie.map((movie) => (
                    <S.ContentMovie key={movie.id}>
                        <ImageComponent
                            posterPatch={movie}
                            voteAverage={movie.vote_average}
                        />
                        <MovieInfo
                            voteAverage={movie.vote_average}
                            title={movie.title}
                            name={movie.name}
                            releaseDate={movie.release_date}
                            firstAirDate={movie.first_air_date}
                        />
                    </S.ContentMovie>
                ))}
            </S.InnerContainer>
        </S.CustomBox>
    );
};
