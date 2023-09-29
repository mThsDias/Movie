import React from "react";
import { SectionMovie } from "../CardMovie/SectionMovie";
import { MovieContext } from "@/context/ContextMovie";
import { TitleMovie } from "../TitleMovie/TitleMovie";
import { ButtonChoiceMovie } from "../TitleMovie/ButtonChoiceMovie";
import * as S from "./styles";

export const Trending = () => {
    const { trending } = React.useContext(MovieContext);

    return (
        <S.Container>
            <S.Content>
                <TitleMovie title="Tendência" />
                <ButtonChoiceMovie />
            </S.Content>
            <SectionMovie cardMovie={trending} />
        </S.Container>
    );
};
