import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

//props used to call value from other components
function ExpenseItem (props) {
    //javascript code Here
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}$</div>
            </div>
        </div>
    );
}

export default ExpenseItem;