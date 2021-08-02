import React from 'react';
import CarouselContainer from './component/CarouselContainer';
import "./Home.css";
import Product from './Product.js'; 
function Home() {
    return (
        <div className="home">
            <div className="home__slider">
                <CarouselContainer className="home__slider" />
            </div>
           {/* <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="" />  */}
            <div className = "home__container">
                <div className="home__row">
                    <Product 
                        id={1}
                        title="Vivo V21e 5G (Dark Pearl, 8GB RAM, 128GB Storage) | Upto 12 Months No Cost EMI | Extra 2500 Off on Exchange" 
                        price={24990.00} 
                        img="https://m.media-amazon.com/images/I/61fCg27sbPS._SY679_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id={2}
                        title="Zebronics Zeb-Warrior 2.0 Multimedia Speaker with Aux Connectivity,USB Powered and Volume Control"
                        price={11490.00}
                        img="https://m.media-amazon.com/images/I/71TsNr7cMgL._SY879_.jpg"
                        rating={4}
                    />
                    <Product 
                        id={9}
                        title="Dell G3 3500 Gaming Laptop with 15.6 Inch (39.62 cms) 120 Hz FHD Display (8 GB/ 1TB+256 SSD/ NVIDIA GTX 1650 4GB Graphics)"
                        price={77390.00}
                        img="https://m.media-amazon.com/images/I/61s0UA4pmVL._SX679_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id={3}
                        title="Armani Exchange Analog Blue Dial Men's Watch - AX1335"
                        price={9995.00}
                        img="https://images-na.ssl-images-amazon.com/images/G/31/img20/Premiumwatches/may/viewall-men/Armani-exchange-._SS680_QL85_.jpg"
                        rating={6}
                    />
                    <Product 
                        id={4}
                        title="Allen Solly Men's Cotton Handkerchief"
                        price={389.00}
                        img="https://m.media-amazon.com/images/I/71JPUl0PDKL._UY741_.jpg"
                        rating={4}
                    />
                    <Product 
                        id={5}
                        title="Puma Unisex-Adult Popcat 20 Sandals Slipper"
                        price={1799.00}
                        img="https://m.media-amazon.com/images/I/61067QWcOiL._UX575_.jpg"
                        rating={5}
                    />
                    <Product 
                        id={7}
                        title="Immortals of Meluha (The Shiva Trilogy Book 1) Kindle Edition"
                        price={147.00}
                        img="https://m.media-amazon.com/images/I/51JYiWwA5mL.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id={6}
                        title="Mi 100 cm (40 Inches) Full HD Android Smart LED TV 4A|L40M5-5AIN (Black)"
                        price={23999.00}
                        img="https://m.media-amazon.com/images/I/71xUMcjZI0S._SX679_.jpg"
                        rating={5}
                    />
                    <Product 
                        id={8}
                        title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Certified Android LED TV 55X7500H (Black) (2020 Model)"
                        price={69989.00 }
                        img="https://m.media-amazon.com/images/I/91QD0vRZdVL._SX679_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default Home;
