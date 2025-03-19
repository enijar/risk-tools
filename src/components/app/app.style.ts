import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    user-select: none;
    font-family: system-ui, sans-serif;
    text-rendering: optimizeLegibility;
  }

  html,
  body {
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  html {
    background-color: rgba(18, 18, 18, 1);
  }

  body, #root {
    block-size: 100%;
  }

  #root {
    display: grid;
    grid-template-columns: 150px 1fr;
    place-items: center;
    padding: 1rem;
  }

  #map {
    display: block;
    inline-size: 100%;
    max-inline-size: 1024px;
    aspect-ratio: 1024 / 536;
    background-image: url("./maps/textureThumbnail_europeAdvanced.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  #capitals {
    background-color: rgba(255, 255, 255, 0.075);
    inline-size: 100%;
    block-size: 100%;
    padding: 1rem;
    border-radius: 1rem;

    > div {
      inline-size: 100%;
      block-size: 100%;
      min-block-size: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }

  .capital {
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
  }

  .capital[data-color="white"] {
    --fill: rgba(111, 111, 111, 1);
  }

  .capital[data-color="black"] {
    --fill: rgba(34, 34, 34, 1);
  }

  .capital[data-color="red"] {
    --fill: rgba(121, 35, 34, 1);
  }

  .capital[data-color="pink"] {
    --fill: rgba(114, 39, 92, 1);
  }

  .capital[data-color="purple"] {
    --fill: rgba(72, 36, 127, 1);
  }

  .capital[data-color="blue"] {
    --fill: rgba(36, 86, 127, 1);
  }

  .capital[data-color="green"] {
    --fill: rgba(84, 112, 52, 1);
  }

  .capital[data-color="yellow"] {
    --fill: rgba(127, 96, 19, 1);
  }

  .capital[data-color="orange"] {
    --fill: rgba(126, 65, 30, 1);
  }
`;
