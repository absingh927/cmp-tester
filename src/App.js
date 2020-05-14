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
  const sampleData = {
    name: "Brad",
    role: "Author",
    duration: "2",
    comment:
      "So what the German automaker is likely to focus on today is the bigger picture.This will be the first time we see the Taycan free from any prototype bodywork",
    replies: 21,
    upVote: 123,
    downVote: 0,
  };

  return (
    <AppContainer>
      <UserComment data={sampleData} />
    </AppContainer>
  );
}

export default App;
