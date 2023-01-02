import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseFrom from './ExpenseForm';


const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);
    const saveNewExpenseListener = (enteredNewExpense) => {
        const newExpense = {
            ...enteredNewExpense,
            id: Math.random().toString()
        };

        props.onAddNewExpense(newExpense);
    }

    const newExpenseListener = () => {
        setShowExpenseForm(true);
    }

    const cancelExpenseListener = () => {
        setShowExpenseForm(false);
    }

    return (
        <div className='new-expense'>
            {!showExpenseForm ? 
                (<button onClick={newExpenseListener}>Add New Expense</button>) :
                (<ExpenseFrom onCancelExpense={cancelExpenseListener} onSaveNewExpense={saveNewExpenseListener}/>)}
        </div>
    );
};

export default NewExpense;