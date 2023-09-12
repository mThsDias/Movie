import React from "react";
import { Slider, SliderProps, Slide } from "@/components/Slider/index";
import { MovieContext } from "@/context/ContextMovie";
import { Movie } from "@/context/movie/types";
import { Header } from "@/components/Header/Header";
import { NavBar } from "../NavBar/NavBar";
import "./HeaderCard.css";

export const HeaderCardComponent = () => {
    const { topRated } = React.useContext(MovieContext);

    const settings: SliderProps = {
        spaceBetween: 50,
        slidesPerView: 3,
        navigation: true,
        pagination: { clickable: true },
    };

    return (
        <div>
            <NavBar />
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
