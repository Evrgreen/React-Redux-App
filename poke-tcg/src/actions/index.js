import axios from "axios";

export const GET_DATA = "GET_DATA";
export const UPDATE_CARDS = "UPDATE_CARDS";
export const GET_QUERY = "GET_QUERY";

export const getData = () => (dispatch) => {
  dispatch({ type: GET_DATA });
  axios
    .get("https://api.pokemontcg.io/v1/cards")
    .then((response) => {
      console.log(response.data);
      dispatch({ type: UPDATE_CARDS, payload: response.data });
    })
    .catch((error) => console.log(error));
};
export const getQuery = (query) => (dispatch) => {
  console.log("querying", query);
  dispatch({ type: GET_DATA });
  axios
    .get(`https://api.pokemontcg.io/v1/cards?name=${query.toLowerCase()}`)
    .then((response) => {
      console.log(response.data.cards);
      dispatch({ type: UPDATE_CARDS, payload: response.data });
    })
    .catch((error) => console.log(error));
};
