import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

    const selectListener = (event) => {
        props.onSelectListener(event.target.value);
    }

    const actualYear = new Date().getFullYear();
    let yearFilter = [];
    let lessYear = 0;
    for (let i=0; i<5; i++) {
        yearFilter.push(actualYear-lessYear);
        lessYear++;
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.filteredYear} onChange={selectListener}>
                    { yearFilter.map((yearValue, index) => 
                        <option 
                            key={index}
                            value={yearValue}>
                                {yearValue}
                        </option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;