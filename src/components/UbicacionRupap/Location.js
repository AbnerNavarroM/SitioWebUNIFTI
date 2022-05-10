import React from 'react';
import './Location.css';

export default function Location() {
    return (
        <div
        style={
            {
                textAlign: 'center',
            }
        }
        className="location"
        >
            <h1>Ubicación</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.6373895809293!2d-86.22629628457554!3d12.13694423592401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fe7867ce5fad%3A0x842c4aeae5cf3cda!2sUniversidad%20Nacional%20de%20Ingenier%C3%ADa%20(RUPAP)!5e0!3m2!1ses-419!2sni!4v1628829494011!5m2!1ses-419!2sni"
                width="100%"
                height="700"
                style={{ border: '0'}}
                allowfullscreen="true"
                loading="lazy"></iframe>
            
            {/* <div
            className="ubicacionInfo"
            >
                <h3>Universidad Nacional de Ingeniería <br /> Recinto Universitario Pedro Aráuz Palacios</h3>
                <h2>De los semáforos de Villa Progreso 2 1/2 cuadras al Este.</h2>
            </div> */}
        </div>
    )
}
