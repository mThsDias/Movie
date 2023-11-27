import React, { useContext } from "react";

import * as S from "../styles";
import Link from "next/link";

import { formatDate } from "@/functions";
import { TrendsContext } from "../context/TrendsContext";
import { OverViewComponent } from "@/components/OverView";
import { DateComponent, ImageComponent, TitleComponent } from "@/components";

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
              <ImageComponent img={dayItem} w={150} h={225} borderRadius={10} />
              <span>
                <OverViewComponent voteAverage={dayItem.vote_average} />
              </span>
            </S.BoxImageAndPercentage>
            <S.BoxTitleAndDate>
              <Link href={`/movies/${dayItem.id}`}>
                <h2>
                  <TitleComponent title={dayItem} />
                </h2>
              </Link>
              <p>
                <DateComponent date={dayItem} formatDate={formatDate} />
              </p>
            </S.BoxTitleAndDate>
          </S.BoxItems>
        ))}
      </S.ContainerItem>
    </section>
  );
};
