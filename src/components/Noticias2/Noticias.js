import React from 'react';
import './Noticias.css';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import { imgGroups } from './sources/ImgGroups';

export default function Noticias(props) {
    return (
        <div
            className="containerNoticias"
            style={{ width: '95%', margin: '2.5% auto' }}
            id={props.id}
        >
            <div
                className='tituloDivNoticias'
                style={{ textAlign: 'center' }}
            >
                <h1>Noticias</h1>
                <p>Relaciónate con el día a día de nuestras autoridades.</p>
            </div>

            <Example />

            {/* <div>
                <img width="100%" src={img} alt="" />
            </div> */}
        </div>
    )
}

function Example(props) {
    var items = [
        {
            name: "Convenio Jhon May",
            description: "Auditoria y Control de Sistemas e Informática",
            Srcs: imgGroups[0],
            index: 0
        },
        {
            name: "Inauguración Sala Kaizen",
            description: "La Calidad de Vida como fundamento de base para la Gestión y Meta Municipal.",
            Srcs: imgGroups[1],
            index: 1
        },
        {
            name: "Visita a Centro de Distribución Casa Pellas",
            description: "Globalización y las economías emergentes.",
            Srcs: imgGroups[2],
            index: 2
        },
        {
            name: "Convenio Jhon May",
            description: "Evaluación y Categorización de Puestos.",
            Srcs: imgGroups[0],
            index: 0
        },
        {
            name: "Inauguración Sala Kaizen",
            description: "Las Empresas y las Innovaciones.",
            Srcs: imgGroups[1],
            index: 1
        },
        {
            name: "Visita a Centro de Distribución Casa Pellas",
            description: "Sistema de Calidad y Normas ISO 9000.",
            Srcs: imgGroups[2],
            index: 2
        },
        {
            name: "Convenio Jhon May",
            description: "Visio 2003 -2007 y la Ingeniería Industrial.",
            Srcs: imgGroups[0],
            index: 0
        },
        {
            name: "Inauguración Sala Kaizen",
            description: "El CIPOD en el análisis del Marketing.",
            Srcs: imgGroups[1],
            index: 1
        },
        {
            name: "Visita a Centro de Distribución Casa Pellas",
            description: "Just in Time - JIT.",
            Srcs: imgGroups[2],
            index: 2
        },
    ]

    return (
        <Carousel
            animation="slide"
            navButtonsAlwaysVisible={true}
            className="carouselNoticias"
            // autoPlay={false}
        >
            {
                items.map((item, i) => <Item key={i} item={item} i={item.index} />)
            }
        </Carousel>
    )
}

function Item(props) {
    const ListofNews = props.item.Srcs.imgSrcs;
    let { i } = props;
    return (
        <Paper
            className="paperNoticias"
        >
            {
                ListofNews.map((img, index) => {
                    return (
                        i == index ?
                            <div className="divNoticieroInfo">
                                <div>
                                    <h2>{props.item.name}</h2>
                                    <p>{props.item.description}</p>
                                    <Button className="CheckButton"
                                    
                                    >
                                        Ver más...
                                    </Button>
                                </div>
                            </div>
                            :
                            <div className="divNoticieroImg" style={{ backgroundImage: `url(${img.src})` }}>
                                <div
                                    className="divi"
                                >
                                    <p>
                                        <span>
                                            <h5>Title</h5>
                                        </span>
                                        {img.description}
                                    </p>
                                </div>
                            </div>
                    )
                })
            }
        </Paper>
    )
}
