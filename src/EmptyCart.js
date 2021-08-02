import React from 'react';
import { Link } from 'react-router-dom';
import "./EmptyCart.css";
import { useStateValue } from './StateProvider';

function EmptyCart() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="empty">
            <img src="https://professionalscareer.com/assets/images/emptycart.png" alt="" />
            <div className="empty__msg">
                <h2 className="msg"> Your Amazon Basket is empty</h2>
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

export default EmptyCart;
