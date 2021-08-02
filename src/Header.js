import React from 'react';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';import { Link } from "react-router-dom"; 
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket , user}, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <Link to='/login' className="header__location">
                    <LocationOnOutlinedIcon />
                    <div className="header__optionLocation">
                        <span className="header__optionLineOne">Hello</span>
                        <span className="header__optionLineTwo">Select your address</span>
                    </div>
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="header__country">
                        <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="" />
                    </div>
                </Link>
                <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">Hello, {(user ? user?.email.split("@")[0] : "Guest").toUpperCase()}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders" style={{ textDecoration: 'none' }}>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>

                 <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Your
                        </span>
                        <span className="header__optionLineTwo">
                            Prime
                        </span>
                    </div>
                </Link>   

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartOutlinedIcon className="header__cart" />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
