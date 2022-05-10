import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React from 'react';
import GeneralCarousel from './components/HomeCarousel/GeneralCarousel';
import HeaderMenu from './components/Header/HeaderMenu';
import Noticias from './components/Noticias2/Noticias'
import NoticiasMobile from './components/Noticias2/NoticiasMobile/NoticiasMobile';
import './App.css';
import CarouselInfoHelp from './components/CarouselInfo&Help/CarouselInfo&Help';
import SocialNetBar from './components/BarraSocNet/SocialNetBar';
import StudentLife from './components/Student Life/StudentLife';
import HomeBanner from './components/CursosPogrados/HomeBanner';
import BannerIngInd from './components/BannerIngIndustrial/BannerIngInd';
import BannerAutoridad from './components/BannerAutoridades/BannerAutoridad';
import Location from './components/UbicacionRupap/Location';
import MisionVision from './components/MisionVision/MisionVision';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  state = {
    CarouselHeight: '600px',
    CarouselWidth: '85%'
  }

  // componentDidMount() {
  //   // Event Listener para Efectos de Scroll

  //   window.addEventListener('scroll', function () {
  //     let animationAut1 = document.getElementById('Autoridad1');
  //     let animationAut2 = document.getElementById('Autoridad2');
  //     let animationAut3 = document.getElementById('Autoridad3');

  //     let Aut1Position = animationAut1.getBoundingClientRect().top;
  //     let Aut2Position = animationAut2.getBoundingClientRect().top;
  //     let Aut3Position = animationAut3.getBoundingClientRect().top;

  //     let mqlMobile = window.matchMedia('(max-width: 425px)');
  //     let mobileView = mqlMobile.matches;

  //     if (mobileView) {
  //       let tamañoPantalla = window.innerHeight - 100;
  //       if (Aut1Position < tamañoPantalla) {
  //         animationAut1.style.animation = 'IzqADer 1s ease-out';
  //         animationAut1.style.transform = 'translateX(0%)';
  //       }

  //       if (Aut2Position < tamañoPantalla) {
  //         animationAut2.style.animation = 'IzqADer 1s ease-out';
  //         animationAut2.style.transform = 'translateX(0%)';
  //       }

  //       if (Aut3Position < tamañoPantalla) {
  //         animationAut3.style.animation = 'IzqADer 1s ease-out';
  //         animationAut3.style.transform = 'translateX(0%)';
  //       }
  //     } else if('(min-width: 426px) and (max-width: 800px)') {
  //       let tamañoPantalla = window.innerHeight + 200;
  //       if (Aut1Position < tamañoPantalla) {
  //         animationAut1.style.animation = 'UpToDown 1s ease-out';
  //         animationAut1.style.transform = 'translateY(0%)';
  //       }

  //       if (Aut2Position < tamañoPantalla) {
  //         animationAut2.style.animation = 'UpToDown 1.5s ease-out';
  //         animationAut2.style.transform = 'translateY(0%)';
  //       }

  //       if (Aut3Position < tamañoPantalla) {
  //         animationAut3.style.animation = 'UpToDown 1s ease-out';
  //         animationAut3.style.transform = 'translateY(0%)';
  //       }
  //     }
  //   });
  // }

  
  render() {
    return (
      <div
        className="AppContainer"
      >
        <SocialNetBar />
        <HeaderMenu />
        <CarouselInfoHelp />
        <GeneralCarousel />
        <Noticias id="NoticiasPc" />
        <NoticiasMobile id="NoticiasMobile" />
        <StudentLife />
        {/* <HomeBanner /> */}
        <BannerIngInd />
        {/* <BannerAutoridad /> */}
        {/* <MisionVision /> */}
        {/* <Location /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
