import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/effect-flip/effect-flip.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    EffectFlip, Pagination, Navigation, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFlip, Pagination, Navigation, Autoplay]);


export default function CarouselMouseWheel(props) {
    return (
        <div
            id="cursosSwiper"
        >
            <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true}
                autoplay={{
                    "delay": 5000,
                    "disableOnInteraction": false
                }}
                className="mySwiper">
                <SwiperSlide className="swiperSlideCursos">
                    {props.children}
                </SwiperSlide>
                <SwiperSlide className="swiperSlideCursos">
                    {props.children}
                </SwiperSlide>
                <SwiperSlide className="swiperSlideCursos">
                    {props.children}
                </SwiperSlide>
                <SwiperSlide className="swiperSlideCursos">
                    {props.children}
                </SwiperSlide>
                <SwiperSlide className="swiperSlideCursos">
                    {props.children}
                </SwiperSlide>
                <SwiperSlide className="swiperSlideCursos">
                    {props.children}
                </SwiperSlide>

            </Swiper>
        </div>
    )
}