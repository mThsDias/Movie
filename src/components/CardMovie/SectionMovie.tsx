import React from "react";
import { Slider, SliderProps, Slide } from "@/components/Slider/index";
import { Movie } from "@/context/movie/types";
import { CardWithMenu } from "./CardWithMenu";
import "./Card.css";
import { MovieInfo } from "../TitleMovie/MovieInfo";

type CardComponentProps = {
    movies: Movie[];
    settings: SliderProps;
};

export const SectionMovie = ({ movies, settings }: CardComponentProps) => {
    return (
        <div>
            <Slider settings={settings}>
                {movies.map((movie) => (
                    <Slide key={movie.id}>
                        <section className="container-card-img">
                            <CardWithMenu movie={movie} />
                            <MovieInfo
                                title={movie.title}
                                releaseDate={movie.release_date}
                                name={movie.name}
                                firstAirDate={movie.first_air_date}
                            />
                        </section>
                    </Slide>
                ))}
            </Slider>
        </div>
    );
};
