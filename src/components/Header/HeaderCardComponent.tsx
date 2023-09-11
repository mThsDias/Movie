import React from "react";
import { Slider, SliderProps, Slide } from "@/components/Slider/index";
import { MovieContext } from "@/context/ContextMovie";
import { Movie } from "@/context/movie/types";
import { Header } from "@/components/Header/Header";
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
        <div className="teste">
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
