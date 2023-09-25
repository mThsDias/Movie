import React from "react";
import { Slider, SliderProps, Slide } from "@/components/Slider/index";
import { Card } from "@/components/CardMovie/Card";
import { MovieContext } from "@/context/ContextMovie";
import { Movie } from "@/context/movie/types";
import { NavBar } from "../NavBar/NavBar";
import { Header } from "../Header/Header";

export const CardComponent = () => {
    const { popularMovies, topRated } = React.useContext(MovieContext);

    const settings: SliderProps = {
        slidesPerView: 6,
        navigation: true,
    };

    return (
        <div>
            <NavBar />
            <h1
                style={{
                    color: "#fff",
                    padding: "4rem 0 0 5rem",
                    fontSize: "1.5rem",
                }}
            >
                Populares
            </h1>
            <Slider settings={settings}>
                {popularMovies.map((movie: Movie) => (
                    <Slide key={movie.id}>
                        <Card movie={movie} />
                    </Slide>
                ))}
            </Slider>
            <h1
                style={{
                    color: "#fff",
                    padding: "4rem 0 0 5rem",
                    fontSize: "1.5rem",
                }}
            >
                Mais bem avaliados
            </h1>

            <Slider settings={settings}>
                {topRated.map((movie: Movie) => (
                    <Slide key={movie.id}>
                        <Header topRated={movie} />
                    </Slide>
                ))}
            </Slider>
        </div>
    );
};
