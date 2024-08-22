import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionHistory from "./components/TransactionHistory";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
