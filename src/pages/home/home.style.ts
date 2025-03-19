import styled from "styled-components";

export const MapSelection = styled.div`
  position: absolute;
  inset-block-start: 1rem;
  inset-inline-end: 1rem;
`;

export const Map = styled.div`
  display: block;
  inline-size: 100%;
  max-inline-size: 1024px;
  aspect-ratio: 1024 / 536;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
`;

export const Capitals = styled.div`
  background-color: rgba(255, 255, 255, 0.075);
  inline-size: 100%;
  block-size: 100%;
  padding: 1rem;
  border-radius: 1rem;
  min-block-size: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Wrapper = styled.div`
  block-size: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  place-items: center;
  padding: 1rem;
`;
