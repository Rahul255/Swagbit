import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

//props used to call value from other components
const ExpenseItem = (props) => {
    //javascript code Here
    let title = props.title;


    const clickHandler = () => {//error function for click handler
        console.log('Clicked');
    }
    return(
        //this card is a custom buildable wrapper component 
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}$</div>
            </div>
            
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        //upper button click function, we wiil create an anonyms error fun
    );
}

export default ExpenseItem;