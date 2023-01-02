import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  { id: 'example1', title: 'Car Insurance', amount: 295.67, date: new Date() },
  { id: 'example2', title: 'Toilet Paper', amount: 5.67, date: new Date() },
  { id: 'example3', title: 'New Desk', amount: 199.99, date: new Date() },
  { id: 'example4', title: 'New Computer', amount: 1500.45, date: new Date(2022, 3, 13) },
  { id: 'example5', title: 'New Keyboard', amount: 100.65, date: new Date('2021-04-04') },
  { id: 'example6', title: 'New Mouse', amount: 50.85, date: new Date('04/04/2020') }
];

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const saveNewExpenseListener = (newExpense) => {
    setExpenses(prevExpenses => [newExpense, ...prevExpenses]);
  }

  return (
    <div className="App">
      <h1>Start App</h1>
      <NewExpense onAddNewExpense={saveNewExpenseListener} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
