import React from "react";
import { Movie } from "@/context/movie/types";
import Image from "next/image";
import * as S from "./styles";

type ImageUrlProps = {
    images: Movie;
    voteAverage: number;
};

export const ImageUrl = ({ images, voteAverage }: ImageUrlProps) => {
    const [color, setColor] = React.useState("#f7f4f8");

    React.useEffect(() => {
        if (voteAverage >= 7) {
            setColor("#21d07a");
        } else if (voteAverage <= 7) {
            setColor("#D2D531");
        } else if (voteAverage <= 6) {
            setColor("#FFC324");
        } else if (voteAverage <= 5) {
            setColor("#FF0000");
        }
    }, [voteAverage]);

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
                <S.CircleContent color={color}>
                    <S.VoteAverage>
                        {((voteAverage / 10) * 100).toFixed(0)}

                        <S.Porcent>%</S.Porcent>
                    </S.VoteAverage>
                </S.CircleContent>
            </S.CircleContainer>
        </S.ContainerImageUrl>
    );
};
