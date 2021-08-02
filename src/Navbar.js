import React from 'react';
import "./Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function Header2() {
    return (
        <div className="navbar">
            <div className="navbar__category all">
                <ReorderIcon className="list" />
                <p>All</p>
            </div>
            <div className="navbar__category">
                <p>Best Sellers</p>
            </div>
            <div className="navbar__category">
                <p>Mobiles</p>
            </div>
            <div className="navbar__category">
                <p>Amazon Pay</p>
            </div>
            <div className="navbar__category">
                <p>Fashion</p>
            </div>
            <div className="navbar__category">
                <p>Electronics</p>
            </div>
            <div className="navbar__category">
                <p>Prime</p>
            </div>
            <div className="navbar__category">
                <p>New Releases</p>
            </div>
            <div className="navbar__category">
                <p>Customer Service</p>
            </div>
            <div className="navbar__category">
                <p>Computers</p>
            </div>
            <div className="navbar__category">
                <p>Home & Kitchen</p>
            </div>
            <div className="navbar__category">
                <p>Toy & Games</p>
            </div>
        </div>
    )
}

export default Header2;
