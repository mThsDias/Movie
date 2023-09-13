import React from "react";
import { Slider, SliderProps, Slide } from "@/components/Slider/index";
import { MovieContext } from "@/context/ContextMovie";
import { Movie } from "@/context/movie/types";
import { Header } from "@/components/Header/Header";
import { NavBar } from "../NavBar/NavBar";
import "./Header.css";
import { ResultsSearch } from "../Input/ResultsSearch";

export const HeaderCardComponent = () => {
    const { topRated } = React.useContext(MovieContext);

    const settings: SliderProps = {
        slidesPerView: 6,
        navigation: true,
    };

    return (
        <div>
            <NavBar />
            {ResultsSearch ? <ResultsSearch /> : null}
            <h1
                style={{
                    color: "#fff",
                    padding: "4rem 0 0 5rem",
                    fontSize: "1.5rem",
                }}
            >
                Em Alta
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
