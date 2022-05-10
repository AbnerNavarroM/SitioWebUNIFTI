import React from 'react';
import './HomeBanner.css';
import { Button } from '@material-ui/core';
import Curso from './Curso';
import CarouselMouseWheel from './CarouselMouseWheel';

export default class HomeBanner extends React.Component {

    state = {
        ChosenCursosView: null,
    }

    componentDidMount() {
        // I'm borrowing the MDN doc notation here: "mql" stands for "media query list".
        const mql = window.matchMedia('(max-width: 800px)');

        // For first render
        let mobileView = mql.matches;
        if (mobileView) {
            this.setState({ ChosenCursosView: CursosMobileTab });
        } else {
            this.setState({ ChosenCursosView: CursosPC });
        }

        // For subsequent renders if screen size changes
        mql.addEventListener('change', (e) => {
            let mobileView = e.matches;
            if (mobileView) {
                this.setState({ ChosenCursosView: CursosMobileTab });
            } else {
                this.setState({ ChosenCursosView: CursosPC });
            }
        });
    }

    render() {
        const { ChosenCursosView } = this.state;
        return (
            <div
                className="EducacionContinua"
            >
                <div
                    className="titulo"
                >
                    <div
                        className="infoTitulo">
                        <h1>
                            Educación Contínua
                        </h1>
                        <p>Contamos con ramas de especialización variadas y con alta calidad.</p>
                        <Button
                            className="CheckButton"
                            id="posgradosBtn">
                            Ver Más Cursos
                        </Button>
                    </div>
                </div>

                {
                    ChosenCursosView &&
                    <ChosenCursosView />
                }

            </div>

        )
    }
}

function CursosPC(props) {
    return (
        <div
            className="cursos"
        >
            <Curso
                title = "Gestión de Activos"
                src="https://2.bp.blogspot.com/-EPB2hv376YE/UQGWTudF5_I/AAAAAAAACJU/HqxO5JT0mM4/s1600/estudiar+ingenieria+industrial.jpg" 
                description = " Este curso empieza...   "
                />
            <Curso
                title = "Diplomado en Calderas"
                src="https://tse4.mm.bing.net/th?id=OIP.WbwoqUR1O8XeH1opCGGVeAHaHa&pid=Api" 
                description = " Este curso empieza...   "
                />
            <Curso
                title = "Mecánica Industrial"
                src="https://2.bp.blogspot.com/-EPB2hv376YE/UQGWTudF5_I/AAAAAAAACJU/HqxO5JT0mM4/s1600/estudiar+ingenieria+industrial.jpg" 
                description = " Este curso empieza...   "
                />
            <Curso
                title = "Gestión de Activos"
                src="https://tse4.mm.bing.net/th?id=OIP.WbwoqUR1O8XeH1opCGGVeAHaHa&pid=Api" 
                description = " Este curso empieza...   "
                />
            <Curso
                title = "Diplomado en Calderas"
                src="https://2.bp.blogspot.com/-EPB2hv376YE/UQGWTudF5_I/AAAAAAAACJU/HqxO5JT0mM4/s1600/estudiar+ingenieria+industrial.jpg" 
                description = " Este curso empieza...   "
                />
            <Curso
                title = "Mecánica Industrial"
                src="https://tse4.mm.bing.net/th?id=OIP.WbwoqUR1O8XeH1opCGGVeAHaHa&pid=Api" 
                description = " Este curso empieza...   "
                />
            <Curso
                title = "Diplomado en Calderas"
                src="https://2.bp.blogspot.com/-EPB2hv376YE/UQGWTudF5_I/AAAAAAAACJU/HqxO5JT0mM4/s1600/estudiar+ingenieria+industrial.jpg" 
                description = " Este curso empieza...   "
                />
            <Curso
                title = "Mecánica Industrial"
                src="https://tse4.mm.bing.net/th?id=OIP.WbwoqUR1O8XeH1opCGGVeAHaHa&pid=Api" 
                description = " Este curso empieza...   "
                />
        </div>
    )
}

function CursosMobileTab(props) {
    const cursos = [
        {
            src: "https://2.bp.blogspot.com/-EPB2hv376YE/UQGWTudF5_I/AAAAAAAACJU/HqxO5JT0mM4/s1600/estudiar+ingenieria+industrial.jpg"
        },
        {
            src: "https://tse4.mm.bing.net/th?id=OIP.WbwoqUR1O8XeH1opCGGVeAHaHa&pid=Api"
        }
    ]

    const index = getRandomInt(2);
    return (
        <CarouselMouseWheel
            className="cursos"
        >
            <Curso
                src={cursos[index].src} />
        </CarouselMouseWheel>
    )
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



