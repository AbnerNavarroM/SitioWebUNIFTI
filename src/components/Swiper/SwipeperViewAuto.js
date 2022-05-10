import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination,
    Autoplay,
    Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


export default function SwipeperViewAuto(props) {
    return (
        <div style={{height: '400px'}}>
            <Swiper slidesPerView={'auto'} spaceBetween={20} pagination={{
                "clickable": true
            }}
            navigation ={ true}
            autoplay={{
                "delay": 3000,
                "disableOnInteraction": false
              }}
            className="mySwiper">
                {props.children}
            </Swiper>
        </div>
    )
}