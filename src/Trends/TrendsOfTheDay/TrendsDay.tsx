import React, { useContext } from "react";
import { TrendsContext } from "../context/TrendsContext";

export const TrendsDay = () => {
  const { trendsDay, errorDay, loadingDay } = useContext(TrendsContext);

  if (loadingDay) {
    return <p>Loading...</p>;
  }

  if (errorDay) {
    return <p>{errorDay}</p>;
  }

  return (
    <div>
      {trendsDay?.map((trendingItem) => (
        <div key={trendingItem.id}>
          <h1>{trendingItem.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${trendingItem.poster_path}`}
            alt={trendingItem.title}
          />
          <p>{trendingItem.overview}</p>
        </div>
      ))}
    </div>
  );
};
