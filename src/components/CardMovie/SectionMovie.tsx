import React from "react";
import { Slider, SliderProps, Slide } from "@/components/Slider/index";
import { Movie } from "@/context/movie/types";
import { CardWithMenu } from "./CardWithMenu";
import "./Card.css";

type CardComponentProps = {
    title: string;
    movies: Movie[];
    settings: SliderProps;
};

export const SectionMovie = ({
    title,
    movies,
    settings,
}: CardComponentProps) => {
    return (
        <div>
            <h1
                style={{
                    color: "#fff",
                    padding: "4rem 0 0 5rem",
                    fontSize: "1.5rem",
                }}
            >
                {title}
            </h1>
            <Slider settings={settings}>
                {movies.map((movie) => (
                    <Slide key={movie.id}>
                        <section className="container-card-img">
                            <CardWithMenu movie={movie} />
                        </section>
                    </Slide>
                ))}
            </Slider>
        </div>
    );
};
