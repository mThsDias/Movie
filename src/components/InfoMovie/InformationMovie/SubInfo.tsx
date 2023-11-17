import LinkIcon from "@mui/icons-material/Link";
import * as S from "./styles";
import React from "react";
import { MovieContext } from "@/context/ContextMovie";

export const SubInfo = () => {
  const { ListTv } = React.useContext(MovieContext);

  return (
    <S.ContainerSubInfo>
      {ListTv?.map((item) => (
        <div key={item.id}>
          <S.Link>
            Site Oficial
            <a target="_blank" href={item.homepage} rel="noreferrer">
              <LinkIcon />
            </a>
          </S.Link>
          <h5>Título Original</h5>
          <p>{item.title}</p>
          <h5>Situação</h5>
          <p>{item.status}</p>
          <h5>Orçamento</h5>
          <p>
            {item.budget
              ? item.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              : "-"}
          </p>
          <h5>Receita</h5>
          <p>
            {item.revenue
              ? item.revenue.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              : "-"}
          </p>
        </div>
      ))}
    </S.ContainerSubInfo>
  );
};
