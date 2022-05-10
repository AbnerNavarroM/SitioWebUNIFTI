import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

export default function Tarjeta(props) {
    return (
        <Card
            hoverable
            cover={<img alt="example" src={props.src} />}
            className="tarjeta"
        >
            <Meta
                className="tituloTarjeta"
                title={props.title? props.title: "Gestión de Activos"}
                description={props.description? props.description: "www.fti.uni.edu.ni"} 
            />
        </Card>
    )
}