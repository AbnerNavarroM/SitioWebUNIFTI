import React from 'react';
import ReactDOM from 'react-dom';
import imgBanner from '../../sources/img/IngenieriaIndustrial.jpg'
import './BannerIngInd.css';
import { Button } from '@material-ui/core';
import { Opacity } from '@material-ui/icons';

export default class BannerIngInd extends React.Component {

    componentDidMount = () => {
        // let objInfoEstHeight = document.getElementsByClassName("InfoEst")[0];
        // let objInfoEstInnerHeight = document.getElementsByClassName("infoEstInner")[0];
        // document.getElementById('containerIfEt').style.marginTop = objInfoEstHeight.style.height;
        let divPadre = document.querySelector(".divBanner");
        let divPadreHeight = divPadre.offsetHeight;
        let divHijo = document.querySelector(".mainContentIndustrial");
        let divHijoHeight = divHijo.offsetHeight;
        let marginTop = (divPadreHeight - divHijoHeight) / 2;
        divHijo.style.marginTop = marginTop + 'px';

        divPadre = document.querySelector(".divBanner");
        divPadreHeight = divPadre.offsetHeight;
        divHijo = document.querySelector(".contentIndustrial");
        divHijoHeight = divHijo.offsetHeight;
        marginTop = (divPadreHeight - divHijoHeight) / 2;
        divHijo.style.marginTop = marginTop + 'px';

        let mql = window.matchMedia('(max-width: 360px)');

        let matrixSize = 0;
        if (mql.matches) {
            matrixSize = 16;
            this.matrixColored(matrixSize);
        } else {
            mql = window.matchMedia('(min-width: 361px) and (max-width: 450px)');
            if (mql.matches) {
                matrixSize = 20;
                this.matrixColored(matrixSize, null);
            }else{
                mql = window.matchMedia('(min-width: 451px)');
                if(mql.matches){
                    matrixSize = 56;
                this.matrixColored(matrixSize, 1.0);
                }
            }
        }

    }

    matrixColored = (matrixSize, opacity) => {
        for (let index = 1; index <= matrixSize; index++) {
            let el = document.createElement('div');
            let backOpacity = opacity ? opacity : 0.75;
            switch (index) {
                case 1: {
                    el.style.backgroundColor = `rgba(240, 248, 255,${backOpacity} )`;
                    break;
                }

                case 2: {
                    el.style.backgroundColor = `rgba(219, 255, 219,${backOpacity} )`;
                    break;
                }

                case 3: {
                    el.style.backgroundColor = `rgba(255, 201, 121,${backOpacity} )`;
                    break;
                }

                case 4: {
                    el.style.backgroundColor = `rgba(79, 120, 255,${backOpacity} )`;
                    break;
                }

                case (matrixSize): {
                    el.style.backgroundColor = `rgba(240, 248, 255,${backOpacity} )`;
                    break;
                }

                case (matrixSize - 1): {
                    el.style.backgroundColor = `rgba(79, 120, 255,${backOpacity} )`;
                    break;
                }

                case (matrixSize - 2): {
                    el.style.backgroundColor = `rgba(219, 255, 219,${backOpacity} )`;
                    break;
                }

                case (matrixSize - 3): {
                    el.style.backgroundColor = `rgba(240, 248, 255,${backOpacity} )`;
                    break;
                }
            }
            document.querySelector(".mainContentIndustrial").appendChild(el);
        }
    }

    render() {
        return (
            <div
                className="divBanner"
                style={{
                    backgroundImage: `url(${imgBanner})`,
                }}
            >
                <div className='containerMainContentIndustrial'>
                    <div className="mainContentIndustrial">
                    </div>
                </div>

                <div className="contentIndustrial">
                    <h1
                    >¡Estudia Ingeniería Industrial! <br /> <span>Modalidad Sabatina</span></h1>

                    <Button
                        className="CheckButton"
                        id="IndustrialSabat"
                    >
                        Plan de Estudios
                    </Button>
                </div>
            </div>
        )
    }
}