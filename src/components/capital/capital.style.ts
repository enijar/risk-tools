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
  &[data-color="white"] {
    --fill: rgba(111, 111, 111, 1);
  }
  &[data-color="black"] {
    --fill: rgba(34, 34, 34, 1);
  }
  &[data-color="red"] {
    --fill: rgba(121, 35, 34, 1);
  }
  &[data-color="pink"] {
    --fill: rgba(114, 39, 92, 1);
  }
  &[data-color="purple"] {
    --fill: rgba(72, 36, 127, 1);
  }
  &[data-color="blue"] {
    --fill: rgba(36, 86, 127, 1);
  }
  &[data-color="green"] {
    --fill: rgba(84, 112, 52, 1);
  }
  &[data-color="yellow"] {
    --fill: rgba(127, 96, 19, 1);
  }
  &[data-color="orange"] {
    --fill: rgba(126, 65, 30, 1);
  }
`;
