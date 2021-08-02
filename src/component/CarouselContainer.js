import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function CarouselContainer() {
    return (
        <div className="carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows autoPlay interval={3000} showStatus={false} showThumbs={false} stopOnHover={false}>
            <div>
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
                    alt=""
                />
            </div>
            <div>
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/GW/BAU/Nord_2/D25332059_WLD_Nord_Dennis-Launch_Tall_Hero_1500x600._CB644910408_.jpg"
                    alt=""
                />
            </div>
            <div>
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/Family/GW_30thJuly/Rv2/D20729242_IN_WLME_SamsungM_Family__DesktopTallHero_1500x600_2._CB645291797_.jpg"
                    alt=""
                />
            </div>
            <div>
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg"
                    alt=""
                />
            </div>
            <div>
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MegaMusicFest/July21/Musicfest_Gw_1500x600._CB645098031_.jpg"
                    alt=""
                />
            </div>
            <div>
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg"
                    alt=""
                />
            </div>
        </Carousel>
    </div>
    )
};

export default CarouselContainer;
