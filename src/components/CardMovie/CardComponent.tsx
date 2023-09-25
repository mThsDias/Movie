import React from "react";
import { SliderProps } from "@/components/Slider/index";
import { MovieContext } from "@/context/ContextMovie";
import { NavBar } from "../NavBar/NavBar";
import { SectionMovie } from "./SectionMovie";

export const CardComponent = () => {
    const { popularMovies, topRated } = React.useContext(MovieContext);

    const settings: SliderProps = {
        slidesPerView: 6,
        navigation: true,
    };

    return (
        <div>
            <NavBar />
            <SectionMovie
                title="Populares"
                movies={popularMovies}
                settings={settings}
            />
            <SectionMovie
                title="Mais bem avaliados"
                movies={topRated}
                settings={settings}
            />
        </div>
    );
};
