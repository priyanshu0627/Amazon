import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./Product.css";
import { useStateValue } from './StateProvider';
function Product({id,title,img,price,rating}) {
    
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
                rating: rating, 
            },
        });
    };
    return (
        <div className="product"> 
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <CurrencyFormat
                        renderText={(value) => (
                            <p className="product__value">{value}</p> 
                        )}
                        decimalScale={2}
                        value={price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                    />
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                    <p>⭐</p>
                    ))}
                </div>
            </div>
                <img src={img} alt="" />
                <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
