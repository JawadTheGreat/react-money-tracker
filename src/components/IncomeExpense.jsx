import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  let allAmounts = transactions.map((transaction) => transaction.amount);

  let totalIncomeBalance = allAmounts
    .filter((amount) => amount >= 0)
    .reduce((acc, num) => (acc += num), 0)
    .toFixed(2);

  let totalExpenseBalance = (
    allAmounts
      .filter((amount) => amount < 0)
      .reduce((acc, num) => (acc += num), 0) * -1
  ).toFixed(2);

  return (
    <div className="income-expense">
      <div className="income">
        <h3>INCOME</h3>
        <h3 className="total-income">${totalIncomeBalance}</h3>
      </div>
      <div className="expense">
        <h3>EXPENSE</h3>
        <h3 className="total-expense">${totalExpenseBalance}</h3>
      </div>
    </div>
  );
}
