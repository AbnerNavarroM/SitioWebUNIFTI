
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./styles.css";

import { imgGroupsMobile } from '../sources/imgGroupsMobile';
import './NoticiasMobile.css'
import { Button } from '@material-ui/core'


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow, Pagination, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);


export default function NoticiasMobile(props) {

  var items = [
    {
      name: "Convenio Jhon May",
      description: "Probably the most random thing you have ever seen!",
      src: imgGroupsMobile[0]
    },
    {
      name: "Inauguración Sala Kaizen",
      description: "Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!",
      src: imgGroupsMobile[1]
    },
    {
      name: "Visita a Centro de Distribución Pellas",
      description: "Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!",
      src: imgGroupsMobile[2]
    },
    {
      name: "Convenio Jhon May",
      description: "Probably the most random thing you have ever seen!",
      src: imgGroupsMobile[0]
    },
    {
      name: "Inauguración Sala Kaizen",
      description: "Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!",
      src: imgGroupsMobile[1]
    },
    {
      name: "Visita a Centro de Distribución Pellas",
      description: "Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!",
      src: imgGroupsMobile[2]
    },
  ];
  return (
    <div
      id={props.id}
    >
      <h1
        className="NoticiasMobileTitle"
      >Noticias</h1>
      <p
      className="NoticiasMobileDescription"
      >Relaciónate con el día a día de nuestras autoridades.</p>

      <Swiper
        className='carouselNoticiasMobile'
        effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
          "rotate": 50,
          "stretch": 50,
          "depth": 100,
          "modifier": 1,
          "slideShadows": true
        }}
        pagination={true}
        autoplay={{
          "delay": 3500,
          "disableOnInteraction": false
        }}
      >
        {
          items.map((item, index) => {
            return (
              <SwiperSlide id="containerMax">
                <div
                  className="carouselImgMobile"
                  style={{ backgroundImage: `url(${item.src.src})` }}
                >
                  <div className="carouselImgMobileContent">
                    <div className="content">
                      <h1>{item.name}</h1>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas
                       tellus. Nec sagittis aliquam...
                      </p>
                      <Button className="CheckButton"
                      id="NoticiasButton"
                      >
                        Ver más...
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
        {/* <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide> */}
      </Swiper>
    </div>
  )
}