import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import EmptyCart from './EmptyCart';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import FlipMove from "react-flip-move";
function Checkout() {
    const [{basket , user}, dispatch] = useStateValue();
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    <hr />
                    <div className="checkout__preview">
                        <FlipMove>
                            {basket.map( (item) => (
                                <div key={item.id}>
                                        <CheckoutProduct
                                            key={item.id}
                                            id = {item.id}
                                            img = {item.img}
                                            title = {item.title}
                                            price = {item.price}
                                            rating = {item.rating}
                                        />
                                </div>
                                ))}
                        </FlipMove>
                        {basket.length===0 && <EmptyCart />}
                    </div>
{/*                     <FlipMove>
                        {basket?.map((item) => (
                            <div key={item.id}>
                                <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                rating={item.rating}
                                />
                            </div>
                        ))}
                    </FlipMove> */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
                <img className="checkout__rightImage" src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
            </div>
        </div>
    )
}

export default Checkout;
