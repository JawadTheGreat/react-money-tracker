import Transaction from "./Transaction";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

export default function TransactionHistory() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history">
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
          />
        ))}
      </ul>
    </div>
  );
}
