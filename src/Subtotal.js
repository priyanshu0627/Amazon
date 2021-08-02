import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
function Subtotal() {
    const history = useHistory();

    const [{basket}, dispatch] = useStateValue();

    const totalAmount = basket?.reduce( (prev, curr) => prev + curr.price,0 );

    console.log('this is total amt>>>>>>>',totalAmount);
    return (        
        <div className="subtotal">
            <small className="subtotal__free">Your order is eligible for FREE Delivery.</small>
            <CurrencyFormat 
                renderText = { (value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" name="" id="" />
                            This order contains a gift.
                        </small>
                    </>
                ) }
                decimalScale = {2}
                value = {totalAmount}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"₹"}
            />

            <button onClick={ e => history.push('/payment') }>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
