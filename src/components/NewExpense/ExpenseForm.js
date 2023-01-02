import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const todayDate = new Date().toISOString().split('T')[0];

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const titleListener = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountListener = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateListener = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitListener = (event) => {
        event.preventDefault();

        const formResult = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // Send data to up component
        props.onSaveNewExpense(formResult);

        // Clear values in form
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };

    return (
        <form onSubmit={submitListener}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleListener} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountListener} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max={todayDate} value={enteredDate} onChange={dateListener} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancelExpense}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;

