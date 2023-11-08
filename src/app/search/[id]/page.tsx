"use client";

import { NavBar } from "@/components/NavBar/NavBar";
import { MovieContext } from "@/context/ContextMovie";
import * as S from "./styles";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function DescriptionMovie() {
  const { searchResult } = React.useContext(MovieContext);

  console.log({ searchResult });

  return (
    <>
      <NavBar />
      <Link style={{ color: "#000" }} href="/">
        Home
      </Link>
      <h2>
        {searchResult?.map((name) => (
          <S.Box key={name.id}>
            <S.Container>
              <S.Section>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${name.poster_path}`}
                  alt={name.title}
                  width={100}
                  height={160}
                  style={{
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                  }}
                />
                <S.BoxDescription>
                  <h5>{name.title || name.name}</h5>
                  <h6>{name.release_date || name.first_air_date}</h6>
                  <p>{name.overview}</p>
                </S.BoxDescription>
              </S.Section>
            </S.Container>
          </S.Box>
        ))}
      </h2>
    </>
  );
}
