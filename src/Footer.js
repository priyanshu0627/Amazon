import React from 'react';
import "./Footer.css";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import data from "./FooterData";
function Footer() {
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
    return (
        <div className="footer">
            <div>
                <button onClick={scrollToTop} className="footer__button" >Back to top <ExpandLessIcon /></button>
            </div>
            <div className="footer__details">
                <div className="footer__detailsUpper">
                    <div className="footer__detailsRow">
                        <h1>Get to Know Us</h1>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Press Releases</p>
                        <p>Amazon Cares</p>
                        <p>Gift a Smile</p>
                    </div>
                    <div className="footer__detailsRow">
                        <h1>Connect with Us</h1>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                    <div className="footer__detailsRow">
                        <h1>Make Money with Us</h1>
                        <p>Sell on Amazon</p>
                        <p>Sell under Amazon Accelerator</p>
                        <p>Amazon Global Selling</p>
                        <p>Become an Affiliate</p>
                        <p>Fulfilment by Amazon</p>
                        <p>Advertise Your Products</p>
                        <p>Amazon Pay on Merchants</p>
                    </div>
                    <div className="footer__detailsRow">
                        <h1>Let Us Help You</h1>
                        <p>COVID-19 and Amazon</p>
                        <p>Your Account</p>
                        <p>Returns Centre</p>
                        <p>100% Purchase Protection</p>
                        <p>Amazon App Download</p>
                        <p>Amazon Assistant Download</p>
                        <p>Help</p>
                    </div>
                </div>
                <hr className="hr" />
                <div className="footer__detailsLower">
                    <img onClick={scrollToTop} className="footer__image" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                    
                    <div className="footer__details__coutryContainer">
                        {data.map(country => (
                                <p className="country">
                                    {country.name}
                                </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <small>© Copyright 2021 Amazon Clone</small>
                <small>Made by Priyanshu Malik 😉</small>
            </div>
        </div>
    )
}

export default Footer;
