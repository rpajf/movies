import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
  html,body {



    -webkit-font-smoothing: antialiased;
  }
  #root {
    min-height: 100vh;
}
  body, input, button {
    font: 16px 'Roboto Slab', sans-serif;
    font-size: 16px;
    background: #2A3140;
    color:rgba(204, 153, 17, 0.75)
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
