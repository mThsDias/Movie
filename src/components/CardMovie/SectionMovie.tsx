import React from "react";
import { Movie } from "@/context/movie/types";
import { MovieInfo } from "../TitleMovie/MovieInfo";
import { ImageComponent } from "./ImageComponent";
import { Box } from "@mui/material";
import * as S from "./styles";

type SectionMovieProps = {
    cardMovie: Movie[];
};

export const SectionMovie = ({ cardMovie }: SectionMovieProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                overflowX: "auto",
                width: "100%",
                height: "auto",
                margin: "0 auto",
                marginBottom: "20px",
                whiteSpace: "nowrap",
                padding: "50px 20px",
                backgroundColor: "#fff",
            }}
        >
            {cardMovie.map((movie) => (
                <S.ContentMovie key={movie.id}>
                    <div>
                        <ImageComponent posterPatch={movie} />
                    </div>
                    <MovieInfo
                        voteAverage={movie.vote_average}
                        title={movie.title}
                        name={movie.name}
                        releaseDate={movie.release_date}
                        firstAirDate={movie.first_air_date}
                    />
                </S.ContentMovie>
            ))}
        </Box>
    );
};
