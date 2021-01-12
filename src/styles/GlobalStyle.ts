import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #1e1d24;
    color: #fdf0f0;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  li {
    list-style: none;
  }
`;
