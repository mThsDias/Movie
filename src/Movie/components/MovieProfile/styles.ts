import styled from "styled-components";

export const ContainerProfile = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #fff;
  padding: 2rem 2.5rem;
  background: #081c22;
`;

export const BoxTitleAndDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;

  span {
    color: #cac3c0;
    font-weight: 600;
  }
`;

export const BoxGenres = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;

  span {
    border: 1px solid #ced2ce;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.95rem;
  }
`;

export const BoxRuntimeAndGenres = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.19rem;
  gap: 2rem;
  font-size: 0.95rem;
`;

export const BoxRuntime = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  gap: 0.2rem;
`;

export const CircleContainer = styled.div`
  width: 70px;
  height: 70px;

  padding: 0.33rem;
  border-radius: 50%;
  background: #081c22;
`;

export const PercentageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-top: 0.5rem;

  p {
    font-size: 0.9rem;
    font-weight: 600;
    width: 100%;
    max-width: 2rem;
  }
`;

export const Trailer = styled.div`
  position: relative;
  margin-top: 15rem;
`;

export const CustomBox = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  white-space: nowrap;
  border-radius: 0.2rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 0.9rem;

  width: 100%;
  max-width: 1100px;

  padding-bottom: 1.5rem;

  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdbdb;
    border-radius: 4px;
  }
`;

export const ContentCast = styled.div`
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

  div {
    margin: 0.4rem 0 0 0.4rem;
    display: flex;
    flex-direction: column;
    height: 80px;
  }

  h3 {
    padding-bottom: 0.2rem;
    font-size: 1rem;
    width: 100%;
    max-width: 140px;
    white-space: normal;
  }

  p {
    font-size: 0.8rem;
    width: 100%;
    max-width: 120px;
    white-space: normal;
  }
`;

export const ContainerCastAndStaff = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const CastCompleted = styled.span`
  display: flex;

  align-items: center;

  gap: 0.2rem;

  a {
    color: #000;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    height: 100%;
  }

  &&:hover {
    text-decoration: underline;
  }
`;

export const EffectBlur = styled.div`
  content: "";
  position: absolute;
  top: 40rem;
  right: 32.9rem;
  bottom: 0;
  width: 80px;
  height: 370px;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );

  transition: opacity 0.9s ease;
`;

export const TitleCast = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  padding: 2rem 0 1rem 0;
  margin-left: 16rem;
`;