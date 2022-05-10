import React from 'react'
import Tarjeta from './Tarjeta';
import './Curso.css';
import { Button } from '@material-ui/core';

export default function Curso(props) {
    return (
        <div
            className="curso"
        >
            <Tarjeta
                src={props.src}
                description={props.description} 
                title = {props.title}
            />

            <div
                className="InfoCourse"
            >
                <p>
                    Este curso interactivo empieza con la revisión de gestión de activos, qué es y qué puede hacer
                    para la organización. Comparte los últimos pensamientos, procesos, métodos y herramientas unidos
                    en la gestión de cualquier tipo de activo.
                </p>
                <Button
                    className="CheckButton InfoCourseButton"
                >
                    Más Información
                </Button>
            </div>
        </div>
    )
}
