import Image from "next/image";
import React from "react";

interface ImageProps {
  img: string;
  w?: number;
  h?: number;
  borderRadius?: number;
}

export const ImageComponent = ({ img, w, h, borderRadius }: ImageProps) => {
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${img}`}
        alt="Poster"
        width={w || 150}
        height={h || 230}
        style={{ borderRadius: borderRadius }}
        loading="eager"
      />
    </>
  );
};
