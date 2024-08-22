import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

let initialState = {
  transactions: [
    { id: 1, text: "Income", amount: +500 },
    { id: 2, text: "Rent", amount: -200 },
    { id: 3, text: "Books", amount: -30 },
  ],
};

let reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION": {
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          transaction.id !== id;
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

  let deleteTransaction = () => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: transactions,
    });
  };

  return (
    <>
      <GlobalContext.Provider value={{ transactions: state.transactions }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
