import React from 'react';
import './InfoComp.css';
import imgCloseButton from './../../sources/img/close-button.svg';

export default function InfoComp(props) {
    return (
        <div
            className="infoComp"
            style={{
                backgroundImage: `url(${props.img})`
            }}
        >

            {/* Boton Cerrar */}
            {/* <div
                style={{ width: '20px' }}
                className="closeButton"
                tooltip="cerrar"
            >
                <img
                    width="100%" src={imgCloseButton} alt="" />
            </div> */}

            {/* Texto Informacion */}
            <div
                className="textoInfo"
            >
                
                    <h4><a href="">{props.titulo}</a></h4>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Suspendisse ultrices gravida dictum fusce.
                </p> */}
            </div>
        </div>
    )
}
