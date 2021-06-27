import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

//props used to call value from other components
const ExpenseItem = (props) => {
    //javascript code Here
    return(
        //this card is a custom buildable wrapper component 
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}$</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;