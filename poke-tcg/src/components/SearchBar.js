import React, { useState } from "react";
import { connect } from "react-redux";
import { getData, getQuery } from "../actions/index";
import { useDropdown } from "../hooks/useDropDown";
import styled from "styled-components";

const StyledSearch = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  label,
  input {
    display: block;
  }
  label {
    margin-left: 3%;
  }
  input {
    margin: 5% 3%;
    border: none;
    border-bottom: 2px blue solid;
    padding: 2%;
  }
  button {
    background: white;
    border: none;
    border: 1px blue solid;
    font-size: 2rem;
    font-weight: 800;
    padding: 1% 8%;
    border-radius: 10px;
  }
`;

const SearchBar = (props) => {
  const [query, Setquery] = useState("");
  const [cardTypes, CardTypeDropdown, setCardTypes] = useDropdown(
    "Card Type",
    ["Pokemon", "Trainer", "Energy"],
    "All"
  );
  const handleChange = (event) => {
    Setquery(event.target.value);
  };
  const handleSubmit = (event) => {
    console.log("querying from search");
    event.preventDefault();
    props.getQuery(query);
  };
  console.log(props);
  return (
    <StyledSearch className="search">
      <CardTypeDropdown />
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor={"search"}>Search</label>
        <input
          value={query}
          id={"search"}
          onChange={handleChange}
          onBlur={handleChange}
          name={"search"}
          placeholder={"search..."}
        />
        <button>Get</button>
      </form>
    </StyledSearch>
  );
};

const mSTP = (state) => {
  return state;
};

const mDTP = {
  getData,
  getQuery
};

export default connect(mSTP, mDTP)(SearchBar);
