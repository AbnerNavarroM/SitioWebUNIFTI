import React from 'react';
import './BannerAutoridad.css';
import ImgCircle from './ImgCircle';
import ImgDecano from './../../sources/img/decano.jpg';
import ImgViceDecana from './../../sources/img/vicedecana.jpg';
import Secretario from './../../sources/img/secretario.jpg';
import User from './../../sources/img/man-user.png'

export default function BannerAutoridad() {
    return (
        <div
            className="BannerAutoridades"
        >
            <div className="tituloAutoridades">
                <h1>Nuestras Autoridades</h1>
            </div>
            <div className="GraphAutoridades">
                <div className="contenedor">
                    <ImgCircle
                        src={ImgDecano}
                        NombreAut="Lesther Artola"
                        Cargo="Decano FTI"
                        id="Autoridad1"
                    />

                    <ImgCircle
                        src={ImgViceDecana}
                        NombreAut="Glenda Velásquez Vargas"
                        Cargo="Vicedecana FTI"
                        stroke={true}
                        id="Autoridad2"
                    />

                    <ImgCircle
                        src={Secretario}
                        NombreAut="XXXXX XXXXXX"
                        Cargo="Secretario FTI"
                        id="Autoridad3"
                    />

                    <ImgCircle
                        src={User}
                        NombreAut="Xxxxx Xxxxx"
                        Cargo="Xxxxxxxx"
                        id="Autoridad4"
                    />

                    <ImgCircle
                        src={User}
                        NombreAut="Xxxxxx Xxxxxx"
                        Cargo="Xxxxxxxxx"
                        id="Autoridad5"
                    />
                </div>
            </div>

            <div className="InfoAutoridades">
            </div>
        </div>
    )
}
