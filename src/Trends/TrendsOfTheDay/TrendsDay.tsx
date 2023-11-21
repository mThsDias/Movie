import React, { useContext } from "react";

import * as S from "../styles";
import Image from "next/image";

import { formatDate } from "@/functions";
import { TrendsContext } from "../context/TrendsContext";
import { OverViewComponent } from "@/components/OverView";
import Link from "next/link";

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
            <S.BoxImageAndPercentage>
              <Image
                src={`https://image.tmdb.org/t/p/original/${dayItem.poster_path}`}
                alt={"Poster"}
                width={150}
                height={230}
                style={{ borderRadius: "10px" }}
                priority
              />
              <span>
                <OverViewComponent voteAverage={dayItem.vote_average} />
              </span>
            </S.BoxImageAndPercentage>
            <S.BoxTitleAndDate>
              <Link href={`/movies/${dayItem.id}`}>
                <h2>{dayItem.title || dayItem.name}</h2>
              </Link>
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
