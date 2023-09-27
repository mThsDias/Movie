import { Movie } from "@/context/movie/types";
import React from "react";

type ImageUrlProps = {
    images: Movie;
};

export const ImageUrl = ({ images }: ImageUrlProps) => {
    return (
        <div>
            <img
                src={`https://image.tmdb.org/t/p/original${images.poster_path}`}
                alt={images.title}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};
