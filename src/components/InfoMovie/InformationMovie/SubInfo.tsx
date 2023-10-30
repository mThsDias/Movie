import { MovieContext } from "@/context/ContextMovie";
import LinkIcon from "@mui/icons-material/Link";
import * as S from "./styles";
import React from "react";

export const SubInfo = () => {
  const { information } = React.useContext(MovieContext);
  console.log(information);

  return (
    <S.ContainerSubInfo>
      <S.Link>
        <a target="_blank" href={information.homepage} rel="noreferrer">
          <LinkIcon />
          Site Oficial
        </a>
      </S.Link>
      <h5>Título Original</h5>
      <p>{information.title}</p>
      <h5>Situação</h5>
      <p>{information.status}</p>
      <h5>Orçamento</h5>
      <p>
        {information.budget
          ? information.budget.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          : "-"}
      </p>
      <h5>Receita</h5>
      <p>
        {information.revenue
          ? information.revenue.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          : "-"}
      </p>
    </S.ContainerSubInfo>
  );
};
