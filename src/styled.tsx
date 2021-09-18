import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(47, 49, 54);
    min-height: 100vh;
    color: white;
    font-family: Avenir Next,Muli,sans-serif;
    min-height: 100vh;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    padding-top: 62px;
  }
  *, ::before, ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
}
`
export const MainContainer = styled.div``;
