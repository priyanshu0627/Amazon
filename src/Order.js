import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order( { order } ) {
    return (
        <div className = "order">
            <h1>Order</h1>
            <p>
                {moment.unix(order.data.created).format("Do MMMM YYYY, h:mma")}
            </p>
            <p className = "order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(items => (
                <CheckoutProduct
                    id = {items.id}
                    title = {items.title}
                    img = {items.img}
                    rating = {items.rating}
                    price = {items.price}
                    hideButton
                />
            ))}
            <CurrencyFormat 
                renderText={value => (
                    <h3 className = "order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"₹"}
            />
        </div>
    )
}

export default Order;
