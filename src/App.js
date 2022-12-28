import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const App = () => {
  let expenses = [
    {id: 'example1', title: 'Car Insurance', amount: 295.67, date: new Date()},
    {id: 'example2', title: 'Toilet Paper', amount: 5.67, date: new Date()},
    {id: 'example3', title: 'New Desk', amount: 199.99, date: new Date()},
    {id: 'example4', title: 'New Computer', amount: 1500.45, date: new Date()}
  ];

  const saveNewExpenseListener = (newExpense) => {
    expenses.push(newExpense);
    console.log(expenses);
}

  return (
    <div className="App">
      <h1>Start App</h1>
      <NewExpense onAddNewExpense={saveNewExpenseListener}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
