import './Card.css';

function Card (props) {
    //this way we can add css of ExpenseItem.css data in the custom card data
    //any value added in the className will add to here
    const classes = ' card ' + props.className;
    return (
        //children props are called the closing and open tag of the custom component
        <div className={classes}>       
            {props.children}
        </div>
    );
}

export default Card;