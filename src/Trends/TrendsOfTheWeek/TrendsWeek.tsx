import React, { useContext } from "react";

import * as S from "../styles";
import Link from "next/link";

import { formatDate } from "@/functions";
import { TrendsContext } from "../context/TrendsContext";
import { OverViewComponent } from "@/components/OverView";
import { ImageComponent, TitleComponent } from "@/components";
import { DateComponent } from "@/components";

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
              <ImageComponent
                img={weekItem}
                w={150}
                h={225}
                borderRadius={10}
              />
              <span>
                <OverViewComponent voteAverage={weekItem.vote_average} />
              </span>
            </S.BoxImageAndPercentage>
            <S.BoxTitleAndDate>
              <Link href={`/movies/${weekItem.id}`}>
                <TitleComponent title={weekItem.title} />
              </Link>
              <p>
                <DateComponent date={weekItem} formatDate={formatDate} />
              </p>
            </S.BoxTitleAndDate>
          </S.BoxItems>
        ))}
      </S.ContainerItem>
    </section>
  );
};
