import React from 'react';
import { Link } from 'react-router-dom';
import "./EmptyCart.css";
import { useStateValue } from './StateProvider';

function EmptyOrder() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="empty">
            <img src="https://cdn.dribbble.com/users/357929/screenshots/2276751/orderup-emptystate-sadbag.png?compress=1&resize=400x300" alt="" />
            <div className="empty__msg">
                <h2 className="msg"> Your Order's list is empty !</h2>
                <h3 className="msg"> Please Sign in first</h3>
                <div className="or">
                    <Link to="/">
                        <button className="button">Continue Shopping</button>
                    </Link>

                    <Link to={user ? "/" : "/login"}>
                        <button className="button">Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyOrder;
