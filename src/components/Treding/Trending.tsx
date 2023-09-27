import React from "react";
import { SectionMovie } from "../CardMovie/SectionMovie";
import { MovieContext } from "@/context/ContextMovie";
import { TitleMovie } from "../TitleMovie/TitleMovie";
import { ButtonChoiceMovie } from "../TitleMovie/ButtonChoiceMovie";
import "./Trending.css";

export const Trending = () => {
    const { trending } = React.useContext(MovieContext);

    return (
        <section>
            <div className="container-trending">
                <TitleMovie title="Tendência" />
                <ButtonChoiceMovie />
            </div>
            <SectionMovie cardMovie={trending} />
        </section>
    );
};
