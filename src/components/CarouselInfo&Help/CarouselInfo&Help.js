import React from 'react';
import './CarouselInfo&Help.css';
import InfoComp from './InfoComp';
import img1 from './../../sources/img/courses1.jpg';
import img2 from './../../sources/img/courses2.jpg';
import img3 from './../../sources/img/courses3.jpg';
import img4 from './../../sources/img/courses4.jpg';
import img5 from './../../sources/img/courses5.jpg';
import img6 from './../../sources/img/courses6.jpg';
import { Button } from '@material-ui/core';

export default function CarouselInfoHelp() {
    return (
        <div
            className="carouselInfo"
        >
            <div
                className="containerCarouselInfoHelp"
            >
                <div>
                    <h3>
                        Lo último
                    </h3>
                </div>
                <div className='containerInfoComp'>
                    <InfoComp
                        titulo="Curso de Resistencia de Materiales"
                        img={img1} />
                    <InfoComp
                        titulo="Nuevos Hitos de la Ingeniería Industrial"
                        img={img2} />
                    <InfoComp
                        titulo="La importancia del Mantenimiento Preventivo en la Maquinaria"
                        img={img3} />
                    <InfoComp
                        titulo="Cómo obtener la certificación en Calderas"
                        img={img4} />
                    <InfoComp
                        titulo="Porqué la Ingeniería es la carrera con mayor demanda en Nicaragua"
                        img={img5} />
                    <InfoComp
                        titulo="Bibliografía Introductiva a la Ingeniería Mecánica"
                        img={img6} />
                </div>
            </div>
            <div className="containerLinks">

                <div className="Links">
                    <div>
                        <h2><a><span>Inscripciones en Línea</span></a></h2>
                    </div>
                </div>
                <div className="Links">
                    <div>
                        <h2><a><span>Matrícula</span></a></h2>
                    </div>
                </div>
                <div className="Links">
                    <div>
                        <h2><a><span>Inscripciones en Línea</span></a></h2>
                    </div>
                </div>
                <div className="Links">
                    <div>
                        <h2><a><span>Matrícula</span></a></h2>
                    </div>
                </div>
            </div>
        </div>

    )
}
