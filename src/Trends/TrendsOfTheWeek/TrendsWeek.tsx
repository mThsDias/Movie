import React, { useContext } from "react";

import * as S from "../styles";
import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/functions";
import { TrendsContext } from "../context/TrendsContext";
import { OverViewComponent } from "@/components/OverView";

export const TrendsWeek = () => {
  const { trendsWeek, loadingTrendsWeek, errorTrendsWeek } =
    useContext(TrendsContext);

  if (loadingTrendsWeek) {
    return <p>Loading...</p>;
  }

  if (errorTrendsWeek) {
    return <p>{errorTrendsWeek}</p>;
  }

  return (
    <section>
      <S.ContainerItem>
        {trendsWeek?.map((weekItem) => (
          <S.BoxItems key={weekItem.id}>
            <S.BoxImageAndPercentage>
              <Image
                src={`https://image.tmdb.org/t/p/original/${weekItem.poster_path}`}
                alt={"Poster"}
                width={150}
                height={225}
                style={{ borderRadius: "10px" }}
                priority
              />
              <span>
                <OverViewComponent voteAverage={weekItem.vote_average} />
              </span>
            </S.BoxImageAndPercentage>
            <S.BoxTitleAndDate>
              <Link href={`/movies/${weekItem.id}`}>
                <h2>{weekItem.title || weekItem.name}</h2>
              </Link>
              <p>
                {weekItem.release_date || weekItem.first_air_date
                  ? formatDate(weekItem.release_date || weekItem.first_air_date)
                  : "Data Indisponível"}
              </p>
            </S.BoxTitleAndDate>
          </S.BoxItems>
        ))}
      </S.ContainerItem>
    </section>
  );
};
