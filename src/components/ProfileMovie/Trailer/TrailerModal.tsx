import { MovieContext } from "@/context/ContextMovie";
import { Movie } from "@/context/movie/types";
import { useParams } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import * as S from "../styles";
import React from "react";

export const apiKey =
  process.env.REACT_APP_API_KEY || "dcf6fe444e49bcbe4d8f215076000be9";

type TrailerModalProps = {
  onClose: () => void;
};

export const TrailerModal = ({ onClose }: TrailerModalProps) => {
  const [trailerKey, setTrailerKey] = React.useState("");

  const params = useParams();
  const { id } = params;

  const { trending, trendingWeekly } = React.useContext(MovieContext);

  trending.find((movie) => movie.id === Number(id)) as Movie;
  trendingWeekly.find((movie) => movie.id === Number(id)) as Movie;

  async function fetchTrailerMovie() {
    try {
      const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=pt-br`;
      const response = await fetch(trailerUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });

      const data = await response.json();

      const trailer = data.results.find(
        (movie: { type: string; key: string }) =>
          movie.type === "Trailer" || movie.type === "tv"
      );

      if (!trailer) return;
      setTrailerKey(trailer.key);
    } catch (error) {
      console.log(error);
    }
  }
  const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;

  React.useEffect(() => {
    fetchTrailerMovie();
  }, []);
  return (
    <S.TrailerContainer>
      <S.Trailer>
        <span style={{ cursor: "pointer" }} onClick={onClose}>
          <CloseIcon
            style={{
              color: "#46cde8",
            }}
          />
        </span>
        <iframe
          width="1350"
          height="800"
          src={trailerUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </S.Trailer>
    </S.TrailerContainer>
  );
};
