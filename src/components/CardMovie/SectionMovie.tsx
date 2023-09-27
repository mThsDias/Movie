import React from "react";
import { Movie } from "@/context/movie/types";
import { MovieInfo } from "../TitleMovie/MovieInfo";
import { ImageComponent } from "./ImageComponent";

type SectionMovieProps = {
    cardMovie: Movie[];
};

export const SectionMovie = ({ cardMovie }: SectionMovieProps) => {
    return (
        <section>
            {cardMovie.map((movie) => (
                <div key={movie.id}>
                    <ImageComponent posterPatch={movie} />
                    <MovieInfo
                        title={movie.title}
                        name={movie.name}
                        releaseDate={movie.release_date}
                        firstAirDate={movie.first_air_date}
                    />
                </div>
            ))}
        </section>
    );
};
