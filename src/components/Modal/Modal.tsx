import React from "react";
import * as S from "./styles";

interface ModalProps {
  onCLose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ onCLose, children }: ModalProps) => {
  return (
    <S.ModalOverlay>
      <S.Modal>
        <button onClick={onCLose}>Fechar</button>
        {children}
      </S.Modal>
    </S.ModalOverlay>
  );
};
