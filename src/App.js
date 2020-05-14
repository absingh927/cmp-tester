import React from "react";
import styled from "styled-components";
import UserComment from "./UserComment";

const AppContainer = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <UserComment />
    </AppContainer>
  );
}

export default App;
