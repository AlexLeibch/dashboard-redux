import { ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER } from "./filter-actions.js";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      return [...state, action.filter];
    }
    case CLEAR_FILTER: {
      return [];
    }
    case REMOVE_FILTER: {
      return state.filter((item) => item !== action.filter);
    }
    default: {
      return state;
    }
  }
};
