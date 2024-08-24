import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "" || amount.trim() === "") {
      alert("Please add a text and amount");
    } else {
      let newTransaction = {
        id: Math.round(Math.random() * 100000000),
        text,
        amount: +amount,
      };
      addTransaction(newTransaction);
      setText("");
      setAmount("");
    }
  };

  return (
    <>
      <form id="form" onSubmit={onSubmit}>
        <h3>Add new transaction</h3>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />
        <label htmlFor="amount">
          Amount <br />
          (negative-expense, positive-income)
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
        <button type="submit" className="submit-btn">
          Add transaction
        </button>
      </form>
    </>
  );
}
