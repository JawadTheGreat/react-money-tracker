import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionHistory from "./components/TransactionHistory";
import "./styles/App.css";
import GlobalProvider from "./context/GlobalState";

function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
