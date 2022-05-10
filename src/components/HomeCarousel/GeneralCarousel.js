import { items } from './../../sources/HomeCarouselItems';
import { Carousel } from 'antd';
import React from 'react';
import './GeneralCarousel.css';

export default function GeneralCarousel(props) {
    let x = 22 + 7 + "b" + 5 + 4;
    console.log(x);
    return (
        <Carousel
            autoplay
            dots={false}
            style={{ minHeight: '100vh' }}
        >
            {
                items.map((item, index) => {
                    return (
                        <div key={index}
                            className='carouselDiv'
                            id={"carouselDiv" + index}
                        >
                        </div>
                    )
                })
            }
        </Carousel>
    )
}
