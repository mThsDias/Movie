import React from "react";
import { Slider, SliderProps, Slide } from "@/components/Slider/index";
import { Card } from "@/components/CardMovie/Card";
import { MovieContext } from "@/context/ContextMovie";
import { Movie } from "@/context/movie/types";

export const CardComponent = () => {
    const { movies } = React.useContext(MovieContext);

    const settings: SliderProps = {
        spaceBetween: 50,
        slidesPerView: 3,
        navigation: true,
        pagination: { clickable: true },
    };

    return (
        <div>
            <h1>Populares na MovieDB</h1>
            <Slider settings={settings}>
                {movies.map((movie: Movie) => (
                    <Slide key={movie.id}>
                        <Card movie={movie} />
                    </Slide>
                ))}
            </Slider>
        </div>
    );
};
