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
    min-block-size: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;
