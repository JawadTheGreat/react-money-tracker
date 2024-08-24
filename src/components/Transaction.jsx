import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  let sign = transaction.amount < 0 ? "-" : "+";

  return (
    <>
      <li
        className={`transaction-history + ${
          transaction.amount < 0 ? "minus" : "plus"
        }`}
      >
        <button
          type="button"
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          &#10005;
        </button>
        <p className="transaction-title">{transaction.text}</p>
        <p className="transaction-price">
          {sign}${Math.abs(transaction.amount)}
        </p>
      </li>
    </>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.any.isRequired,
};
