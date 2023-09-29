import React from "react";
import { Movie } from "@/context/movie/types";
import Image from "next/image";

type ImageUrlProps = {
    images: Movie;
};

export const ImageUrl = ({ images }: ImageUrlProps) => {
    return (
        <div>
            <Image
                src={`https://image.tmdb.org/t/p/original${images.poster_path}`}
                alt={images.title}
                width={156}
                height={245}
                style={{ borderRadius: "7px" }}
            />
        </div>
    );
};
