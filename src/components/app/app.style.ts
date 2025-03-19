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
`;
