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

    case "DECREMENT_PRODUCT":
      const index = state.basket.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        const newBasket = [...state.basket];
        newBasket.splice(index, 1); 
        return {
          ...state,
          basket: newBasket,
        };
      }
      return state;

    case "REMOVE_PRODUCT":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== payload.id),
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
