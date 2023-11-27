import React, { useContext } from "react";

import * as S from "./styles";
import { formatCash } from "@/functions";
import { MovieContext } from "@/Movie/context/MovieContext";
import { ProductionCompanies } from "./ProductionCompanies";

export const EnhancedDetails = () => {
  const { movie } = useContext(MovieContext);
  console.log({ movie });

  return (
    <S.ContainerDetails>
      <S.BoxDetails>
        {movie?.map((movie, index) => (
          <section key={index}>
            <p>
              <strong>Título:</strong> {movie.title}
            </p>
            <p>
              <strong>Orçamento:</strong>
              {formatCash(movie.budget)}
            </p>
            <p>
              <strong>Receita:</strong>
              {formatCash(movie.revenue)}
            </p>
            <p>
              <strong>Homepage:</strong> {movie.homepage}
            </p>
            <p>
              <strong>Duração:</strong>
              {movie.runtime} minutos
            </p>
            <div>
              <ProductionCompanies
                production_companies={movie.production_companies}
              />
            </div>
          </section>
        ))}
      </S.BoxDetails>
    </S.ContainerDetails>
  );
};
