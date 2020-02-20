import React from "react";
import styled from "styled-components";

import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 1fr;
  grid-template-areas:
    "header header header"
    "search cardlist cardlist"
    "search cardlist cardlist";
  h1 {
    grid-area: header;
  }
  .search {
    grid-area: search;
  }
  .cardList {
    grid-area: cardlist;
  }
`;

function App() {
  return (
    <StyledApp className="App">
      <h1>Pokemon TCGDB </h1>
      <SearchBar />
      <CardList />
    </StyledApp>
  );
}

export default App;
