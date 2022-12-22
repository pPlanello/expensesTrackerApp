import './App.css';
import Expenses from './components/Expenses/Expenses';


const App = () => {
  const expenses = [
    {id: '1', title: 'Car Insurance', amount: 295.67, date: new Date()},
    {id: '2', title: 'Toilet Paper', amount: 5.67, date: new Date()},
    {id: '3', title: 'New Desk', amount: 199.99, date: new Date()},
    {id: '4', title: 'New Computer', amount: 1500.45, date: new Date()}
  ];

  return (
    <div className="App">
      <h1>Start App</h1>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
