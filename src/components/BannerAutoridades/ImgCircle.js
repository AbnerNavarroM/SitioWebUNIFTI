import React from 'react';

export default function ImgCircle(props) {

    return (
        <div
            className="divImgAutoridad"
            id={props.id}
            style={
                {
                    backgroundImage: `url(${props.src})`,
                    border : props.stroke ? '2px solid rgba(0, 0, 0, 0.75)' : 'none',
                }
            }
        >
            <div
            className="presentacionAut"
            >
                <h3>{props.NombreAut} <br /> {props.Cargo}</h3>
            </div>
        </div>
    )
}
