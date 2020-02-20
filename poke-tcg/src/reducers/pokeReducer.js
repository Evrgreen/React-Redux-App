import { GET_DATA, UPDATE_CARDS } from "../actions/index";

const initialState = {
  fetchedData: [],
  isFetching: false
};

export const pokeReducer = (state = initialState, action) => {
  const { fetchedData, isFetching } = state;
  const { type, payload } = action;
  console.log(state, action);
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        isFetching: true
      };
    case UPDATE_CARDS:
      return {
        ...state,
        fetchedData: payload,
        isFetching: false
      };

    default:
      return state;
  }
};
