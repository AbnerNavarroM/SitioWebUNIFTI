import React from 'react';
import vidEst from './../../sources/img/studentLife.jpg';
import './StudentLife.css';
import { Button } from '@material-ui/core';

export default class StudentLife extends React.Component {

    
    componentDidMount = () =>{
        // let objInfoEstHeight = document.getElementsByClassName("InfoEst")[0];
        // let objInfoEstInnerHeight = document.getElementsByClassName("infoEstInner")[0];
        // document.getElementById('containerIfEt').style.marginTop = objInfoEstHeight.style.height;
        let mql = window.matchMedia('(min-width: 451px)');

        if(mql.matches){

            let divVidaEst = document.querySelector(".divVidaEst");
            let vidEstHeight = divVidaEst.offsetHeight;
            let divInfoEst = document.querySelector(".InfoEst");
            let divInfoEstHeight = divInfoEst.offsetHeight;
            console.log(divInfoEstHeight);
            console.log(vidEstHeight);
            const marginTop = (vidEstHeight - divInfoEstHeight) / 2;
            divInfoEst.style.marginTop = marginTop + 'px';
        }
    }

    render() {
        return (
            <div
                className="divVidaEst"
            >
                <div
                    className='studentLifeImg'
                    style={{
                        backgroundImage: `url(${vidEst})`,
                    }}
                >
                    <div className="InfoEst">
                        <div className="InfoEstInner">
                            <h1>Forma Parte de Nuestra Comunidad Universitaria</h1>
                            <h2>Forma Parte de Nuestra Comunidad Universitaria</h2>
                            <p>En la UNI promovemos la participación de los estudiantes en la vida universitaria como un modo de responder mejor a sus necesidades
                                y de adelantar el liderazgo. Conoce las diversas organizaciones estudiantiles que pueden aportar a tu vida estudiantil y que contribuyen
                                al desarrollo de un mejor ambiente académico, cultural y recreativo en tu recinto.
                            </p>

                            <Button className="CheckButton" id="vidEstButton">
                                Vida Estudiantil
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
