import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

let initialState = {
  transactions: [
    { id: 1524, text: "Income", amount: +500 },
    { id: 2757, text: "Rent", amount: -200 },
    { id: 3755, text: "Books", amount: -30 },
  ],
};

let reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION": {
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          transaction.id !== action.payload;
        }),
      };
    }

    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  let deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <>
      <GlobalContext.Provider
        value={{ transactions: state.transactions, deleteTransaction }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
