import React from "react";
import { MovieInfo } from "../TitleMovie/MovieInfo";
import { PercentageRounded } from "../CardMovie/PercentageRounded";
import { Movie } from "@/context/movie/types";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import * as S from "./styles";

type ProfileInfoAndPercentageProps = {
    movie: Movie;
};

export const ProfileInfoAndPercentage = ({
    movie,
}: ProfileInfoAndPercentageProps) => {
    return (
        <div>
            {movie && (
                <>
                    <S.InfoContainer>
                        <MovieInfo
                            title={movie.title}
                            name={movie.name}
                            releaseDate={movie.release_date}
                            firstAirDate={movie.first_air_date}
                        />
                    </S.InfoContainer>
                    <S.PercentageContainer>
                        <S.CircleContainer>
                            <PercentageRounded
                                voteAverage={movie.vote_average}
                            />
                        </S.CircleContainer>
                        <p>Avaliação dos usuários</p>
                        <span>
                            <PlayArrowIcon />
                            Reproduzir trailer
                        </span>
                    </S.PercentageContainer>
                </>
            )}
        </div>
    );
};
