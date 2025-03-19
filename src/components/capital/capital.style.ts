import styled from "styled-components";

export const Wrapper = styled.div`
  --fill: #00ff00;
  --stroke: #000000;
  --stroke-width: 10;
  inline-size: 50px;
  translate: var(--x, 0px) var(--y, 0px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  svg {
    filter: brightness(200%);
  }
`;
