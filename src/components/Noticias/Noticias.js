import React from 'react';
import './Noticias.css';
import './NoticiaPc';
import SwipeperViewAuto from './../Swiper/SwipeperViewAuto';
import { SwiperSlide } from "swiper/react";

export default function Noticias() {
    return (
        <div className="noticiasComponent">

            <h1>Noticias</h1>
            <hr />
            <SwipeperViewAuto>
                <SwiperSlide>
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Facademiafti%2Fposts%2F1501161276747994&show_text=true&width=500" width="450" height="400" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Facademiafti%2Fposts%2F1495067790690676&show_text=true&width=500" width="450" height="400" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Facademiafti%2Fposts%2F1501161276747994&show_text=true&width=500" width="450" height="400" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Facademiafti%2Fposts%2F1495067790690676&show_text=true&width=500" width="450" height="400" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </SwiperSlide>
            </SwipeperViewAuto>

            <div className="seccionNoticias">


            </div>
        </div>
    )
}
