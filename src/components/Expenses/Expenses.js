import { useState } from 'react';
import Card from '../Shared/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

    const selectListener = (selectYear) => {
        setFilteredYear(selectYear);
    };

    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className='expenses'>
            <ExpensesFilter filteredYear={filteredYear} onSelectListener={selectListener} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;