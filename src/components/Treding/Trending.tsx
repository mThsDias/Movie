import React from "react";
import { SectionMovie } from "../CardMovie/SectionMovie";
import { MovieContext } from "@/context/ContextMovie";
import { SliderProps } from "../Slider";
import { TitleMovie } from "../TitleMovie/TitleMovie";
import { ButtonChoiceMovie } from "../TitleMovie/ButtonChoiceMovie";
import "./Trending.css";

export const Trending = () => {
    const { trending } = React.useContext(MovieContext);

    const settings: SliderProps = {
        slidesPerView: 6,
        navigation: true,
    };

    return (
        <section>
            <div className="container-trending">
                <TitleMovie title="Tendência" />
                <ButtonChoiceMovie />
            </div>
            <div className="teste">
                <SectionMovie movies={trending} settings={settings} />
            </div>
        </section>
    );
};
