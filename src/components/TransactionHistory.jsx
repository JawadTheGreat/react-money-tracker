export default function TransactionHistory() {
  return (
    <div className="history">
      <h3>History</h3>
      <ul className="list">
        <li className="transaction-history minus">
          <button type="button" className="delete-btn">
            &#10005;
          </button>
          <p className="transaction-title">Food</p>
          <p className="transaction-price">$120</p>
        </li>
      </ul>
    </div>
  );
}
