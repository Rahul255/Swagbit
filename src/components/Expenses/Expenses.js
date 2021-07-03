import React ,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter"; 
const Expenses = (props) => {

    const [filteredYear, setFilteredYear]= useState ('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };


    return(
        
        <Card className="expenses">
            <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            </div>
            <div>
                <ExpenseItem 
                    title={props.items[0].title} 
                    amount={props.items[0].amount} 
                    date={props.items[0].date}/>
            </div>
            <div>
                <ExpenseItem
                    title={props.items[1].title} 
                    amount={props.items[1].amount} 
                    date={props.items[1].date}
                />
            </div>
            <div>
                <ExpenseItem
                    title={props.items[2].title} 
                    amount={props.items[2].amount} 
                    date={props.items[2].date}
                />
            </div>
            <div>
                <ExpenseItem
                    title={props.items[2].title} 
                    amount={props.items[2].amount} 
                    date={props.items[2].date}
                />
            </div>
        </Card>
    );
}

export default Expenses;