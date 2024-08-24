import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

let initialState = {
  transactions: [],
};

let reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION": {
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          return transaction.id !== action.payload;
        }),
      };
    }

    case "ADD_TRANSACTION": {
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    }

    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
