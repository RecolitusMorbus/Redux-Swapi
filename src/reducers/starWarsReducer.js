import { FETCH_CHARACTERS, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ''
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        fetching: true
      }
    case FETCH_SUCCESS:
      console.log(action.log)
      return {
        ...state,
        characters: action.payload,
        fetching: false
      }
    case FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
