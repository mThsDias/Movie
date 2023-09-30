import React from "react";
import { Movie } from "@/context/movie/types";
import { MovieInfo } from "../TitleMovie/MovieInfo";
import { ImageComponent } from "./ImageComponent";
import * as S from "./styles";

type SectionMovieProps = {
    cardMovie: Movie[];
};

export const SectionMovie = ({ cardMovie }: SectionMovieProps) => {
    const [showBlur, setShowBlur] = React.useState(true);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.target as HTMLDivElement;

        if (container.scrollLeft === 0) {
            setShowBlur(true);
        } else {
            setShowBlur(false);
        }
    };

    return (
        <S.CustomBox onScroll={handleScroll}>
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
            <S.EffectBlur style={{ opacity: showBlur ? 1 : 0 }} />
        </S.CustomBox>
    );
};
