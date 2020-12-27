import React from "react";
import List from "./List";
import styled, { createGlobalStyle } from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  padding-top: 25%;
  width: 400px;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
  }
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <List />
    </Wrapper>
  );
}

export default App;
