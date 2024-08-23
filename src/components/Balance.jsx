import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  let allAmounts = transactions.map((transaction) => transaction.amount);

  let totalBalance = allAmounts
    .reduce((acc, num) => (acc += num), 0)
    .toFixed(2);

  return (
    <div className="total-balance">
      <h3>YOUR BALANCE</h3>
      <h2 className="balance">${totalBalance}</h2>
    </div>
  );
}
