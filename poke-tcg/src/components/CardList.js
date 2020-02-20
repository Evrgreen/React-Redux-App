import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Card from "./Card";
import { getData } from "../actions/index";

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  button {
    grid-column: 2/3;
    border: none;
    border: 1px solid black;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 800;
    background-color: white;
    width: 10rem;
    max-height: 3.3rem;
  }
`;

const CardList = ({ cards, getData }) => {
  console.log(cards);

  return (
    <StyledList className="cardList">
      {cards ? (
        cards.map((item) => {
          return <Card card={item} key={item.id} />;
        })
      ) : (
        <button onClick={() => getData()}>Catch 'em All</button>
      )}
    </StyledList>
  );
};

const mSTP = ({ fetchedData }) => fetchedData;

const mDTP = {
  getData
};

export default connect(mSTP, mDTP)(CardList);
