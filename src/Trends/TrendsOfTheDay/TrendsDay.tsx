import React, { useContext } from "react";

import * as S from "../styles";
import Image from "next/image";

import { formatDate } from "@/functions";
import { TrendsContext } from "../context/TrendsContext";

export const TrendsDay = () => {
  const { trendsDay, errorTrendsDay, loadingTrendsDay } =
    useContext(TrendsContext);

  if (loadingTrendsDay) {
    return <p>Loading...</p>;
  }

  if (errorTrendsDay) {
    return <p>{errorTrendsDay}</p>;
  }

  return (
    <section>
      <S.ContainerItem>
        {trendsDay?.map((dayItem) => (
          <S.BoxItems key={dayItem.id}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${dayItem.poster_path}`}
              alt={"Poster"}
              width={150}
              height={230}
              priority
              style={{ borderRadius: "10px" }}
            />
            <S.BoxTitleAndDate>
              <h2>{dayItem.title || dayItem.name}</h2>
              <p>
                {formatDate(dayItem.release_date || dayItem.first_air_date)}
              </p>
            </S.BoxTitleAndDate>
          </S.BoxItems>
        ))}
      </S.ContainerItem>
    </section>
  );
};
