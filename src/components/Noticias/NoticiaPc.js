import React from 'react';
import './NoticiaPc.css';

export default function NoticiaPc(props) {
    return (
        <div className="contenedorNoticia">
            <div>
                <h3 style={{ fontWeight: 'bold' }}>
                    {props.titulo}
                </h3>
                <hr />
            </div>
            <div className="contenedorImgNoticia">
                <img src={props.src} alt="" />
            </div>
            <div>
                <p>
                    {props.children}
                </p>
            </div>
        </div>
    )
}

{/* <div style={{ display: 'inline-block', width: "50%" }}>
    <div className="contenedorNoticia" style={{ width: '100%', margin: '10px auto', height: '200px', padding: '10px' }}>
        <div className="infoNoticia" style={{ display: 'block', width: '60%' }}>
            <div className="TituloNoticia" style={{ textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
                    {props.titulo}
                </h3>
            </div>
            <div className="NoticiaCaption" style={{ textAlign: 'justify' }}>
                <p>
                    {props.children}
                </p>
            </div>
        </div>

        <div className="imgNoticia" style={{ display: 'block', width: '35%' }}>
            <div style={{ width: '95%', margin: '0 auto' }}>
                <img style={{ width: '95%', margin: '-50px auto 0 15px' }} src={props.src} alt="" />
            </div>
        </div>
    </div>
</div> */}
