import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        basket: [...state.basket, payload],
      };

    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: payload,
      };

    default:
      return state;
  }
};


export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    basket: [],
    searchTerm: "",
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
