export default function AddTransaction() {
  return (
    <>
      <form id="form">
        <h3>Add new transaction</h3>
        <label htmlFor="text">Text</label>
        <input type="text" id="text" placeholder="Enter text..." />
        <label htmlFor="amount">
          Amount <br />
          (negative-expense, positive-income)
        </label>
        <input type="number" id="amount" placeholder="Enter amount..." />
        <button type="submit" className="submit-btn">
          Add transaction
        </button>
      </form>
    </>
  );
}
