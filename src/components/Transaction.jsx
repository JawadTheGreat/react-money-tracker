import PropTypes from "prop-types";

export default function Transaction({ text, amount }) {
  let sign = amount < 0 ? "-" : "+";

  return (
    <>
      <li className={`transaction-history + ${amount < 0 ? "minus" : "plus"}`}>
        <button type="button" className="delete-btn">
          &#10005;
        </button>
        <p className="transaction-title">{text}</p>
        <p className="transaction-price">
          {sign}${Math.abs(amount)}
        </p>
      </li>
    </>
  );
}

Transaction.propTypes = {
  text: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
