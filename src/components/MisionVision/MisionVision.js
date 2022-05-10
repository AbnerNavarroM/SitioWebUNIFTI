import React from 'react';
import './MisionVision.css';
import Vision from './../../sources/img/vision.png';
import Mision from './../../sources/img/mission.png'

export default function MisionVision() {
    return (
        <div
            className="misionVisionContainer"
        >
            <h1
                id="tituloMisionVision"
            >Misión y Visión</h1>

            <div className="infoMisionVision">
                <div className="misionContainer">
                    <div className="misionImgContainer">
                        <img src={Mision}
                            alt="" />
                    </div>
                    <h1>Misión</h1>
                    <p>
                        La Facultad de Tecnología de la Industria es una instancia
                        de la UNI, dedicada a la formación integral de profesionales
                        en Ingeniería Industrial, Ingeniería Mecánica, Ingeniería en
                        Economía y Negocios, e Ingeniería AgroIndustrial, mediante la
                        investigación y la extensión, manteniendo el liderzgo en
                        excelencia académica con apego a las normas éticas, humanísticas
                        y ambientales, contribuyendo así a la transformación tecnológica
                        y al desarrollo sustentable de Nicaragua y de la región.
                    </p>
                </div>

                <div className="visionContainer">
                    <div className="misionImgContainer">
                        <img src={Vision}
                            alt="" />
                    </div>
                    <h1>Visión</h1>
                    <p>La Facultad de Tecnología de la Industria es una instancia
                        de la UNI que se consolida como referente en la enseñanza
                        de Ingeniería Industrial, Ingeniería Mecánica, Ingeniería en
                        Economía y Negocios, e Ingeniería Agroindustrial, a través de
                        la investigación y tecnología, así como la interacción con los
                        diversos actores y sectores sociales, económicos y culturales
                        del país, contribuyendo al crecimiento y desarrollo nacional en
                        función del bienestar de la sociedad nicaragüense.
                    </p>
                </div>
            </div>
        </div>
    )
}
