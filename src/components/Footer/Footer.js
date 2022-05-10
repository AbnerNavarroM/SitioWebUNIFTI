import React from 'react';
import './Footer.css';
import { ReactComponent as MailIcon } from './../../sources/logos/mail.svg';
import { ReactComponent as TelIcon } from './../../sources/logos/telephone.svg';
import { ReactComponent as LocateIcon } from './../../sources/logos/placeholder.svg';
import WhtAppIcon from './../../sources/img/whatsapp.png';
import TwitterIcon from './../../sources/img/twitter.png';
import FacebookIcon from './../../sources/img/facebook.png';

export default function Footer() {
    return (
        <div
            className="HomeFooter"
        >
            <div className="columna">
                <h1>CONTACTO</h1>
                <div
                    className="infoDivFooter"
                >
                    <MailIcon
                        className="mailIconFooter iconSide"
                    />

                    <div className="mailInformation infoSide">
                        <h3>decanaturafti@uni.edu.ni</h3>
                    </div>
                </div>

                <div
                    className="infoDivFooter"
                >
                    <TelIcon
                        className="telIconFooter iconSide"
                    />

                    <div className="telInformation infoSide">
                        <h3>(505) 2249-6429</h3>
                    </div>
                </div>

                <div
                    className="infoDivFooter"
                >
                    <LocateIcon
                        className="locateIconFooter iconSide"
                    />

                    <div className="locateInformation infoSide">
                        <h3>Semáforos Villa Progreso,
                            250 mts. al Este.</h3>
                    </div>
                </div>
            </div>

            <div className="columna">
                <h1>
                    ENLACES
                </h1>

                <div
                    className="enlaces secondDiv"
                >
                    <a href="https://www.uni.edu.ni" target="_blank" >Universidad Nacional de Ingeniería</a><br />
                    <a href="">Calendario Académico</a><br />
                    <a href="">Notas en Línea</a><br />
                    <a href="">Correo UNI</a><br />
                    <a href="">Biblioteca Virtual</a><br />
                    <a href="">UNI-RURC</a><br />
                    <a href="">UNI-RUACS</a><br />
                    <a href="">UNI-ies</a>
                </div>

            </div>

            <div className="columna">
                <h1>
                    CONECTAR
                </h1>

                <div className="RedesSocialesContainer">
                    <img src={TwitterIcon} alt=""
                        className="socialIcons"
                    />

                    <img src={WhtAppIcon} alt=""
                        className="socialIcons"
                    />

                    <img src={FacebookIcon} alt=""
                        className="socialIcons"
                    />
                </div>
            </div>

            <div className="BottomFooter">
                <p>Facultad de Tecnología de la Industria</p>
            </div>
        </div>
    )
}
