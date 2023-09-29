import React from "react";
import { Movie } from "@/context/movie/types";
import Image from "next/image";
import * as S from "./styles";

type ImageUrlProps = {
    images: Movie;
    voteAverage: number;
};

export const ImageUrl = ({ images, voteAverage }: ImageUrlProps) => {
    return (
        <S.ContainerImageUrl>
            <Image
                src={`https://image.tmdb.org/t/p/original${images.poster_path}`}
                alt={"Poster"}
                width={156}
                height={245}
                style={{
                    borderRadius: "7px",
                    objectFit: "cover",
                    cursor: "pointer",
                }}
                loading="lazy"
            />
            <S.CircleContainer>
                <S.CircleContent>
                    <S.VoteAverage>
                        {((voteAverage / 10) * 100).toFixed(0)}
                        <S.Porcent>%</S.Porcent>
                    </S.VoteAverage>
                </S.CircleContent>
            </S.CircleContainer>
        </S.ContainerImageUrl>
    );
};
