import React, { useEffect } from "react";

import * as S from "./styles";
import { Tv } from "@/Tv/context/types";
import { ImageComponent } from "../Image";
import Link from "next/link";
import { Modal } from "../Modal/Modal";

export const ComponentOnePiece = () => {
  const [onePiece, setOnePiece] = React.useState<Tv[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/37854?api_key=${apiKey}&language=pt-BR`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setOnePiece([data]);
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }, []);

  return (
    <S.ContainerOnePiece>
      {onePiece.map((item) => (
        <S.BoxOnePiece key={item.id}>
          <S.BoxDescription>
            <div>
              <h1>{item.name}</h1>
              <p>{item.overview}</p>
            </div>
            <S.Button>
              <Link href="/tv/37854">
                <span>Assistir Agora</span>
              </Link>
              <span onClick={handleOpenModal}>Assistir Trailer</span>
              {isModalOpen && (
                <Modal onCLose={handleCloseModal}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8Q5K3VXf1wQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </Modal>
              )}
            </S.Button>
          </S.BoxDescription>
          <ImageComponent
            img={item.poster_path}
            borderRadius={20}
            w={400}
            h={600}
          />
        </S.BoxOnePiece>
      ))}
    </S.ContainerOnePiece>
  );
};
