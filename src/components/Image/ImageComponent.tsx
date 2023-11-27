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
        src={`https://image.tmdb.org/t/p/original/${img}`}
        alt="Poster"
        width={w || 150}
        height={h || 255}
        style={{ borderRadius: borderRadius }}
        priority
      />
    </>
  );
};
