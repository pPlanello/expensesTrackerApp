import React from 'react';
import './NewExpense.css';
import ExpenseFrom from './ExpenseForm';


const NewExpense = (props) => {
    const saveNewExpenseListener = (enteredNewExpense) => {
        const newExpense = {
            ...enteredNewExpense,
            id: Math.random().toString()
        };


        props.onAddNewExpense(newExpense);
    }
    return (
        <div className='new-expense'>
            <ExpenseFrom onSaveNewExpense={saveNewExpenseListener}/>
        </div>
    );
};

export default NewExpense;