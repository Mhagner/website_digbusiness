import React from 'react'

import VideoWeb from '../img/celular2.webm'
import '../styles/video.css'


const Header = () => {
    return (
        <header id="home" >
            <div className="container">
                <div class="bg-video">
                    <video class="bg-video__content" autoPlay muted loop>
                        <source src={VideoWeb} type="video/mp4" />
                        <source src={VideoWeb} type="video/webm" />
                        Seu browser não suporta o video
                    </video>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="logo">
                        <a className="navbar-brand" href="#"><img src="images/logo-dig.png" alt="" /></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="interactive-menu-button">
                            <a href="#">
                                <span>Menu</span>
                            </a>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                {/* Nav Link */}
                                <a className="nav-link" data-scroll href="#home">HOME<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                {/* Nav Link */}
                                <a className="nav-link" data-scroll href="#about-us">Quem Somos</a>
                            </li>
                            <li className="nav-item">
                                {/* Nav Link */}
                                <a className="nav-link" data-scroll href="#portfolio">Portifólio</a>
                            </li>
                            <li className="nav-item">
                                {/* Nav Link */}
                                <a className="nav-link" data-scroll href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                {/* Nav Link */}
                                <a className="nav-link" data-scroll href="#contact-us">Contato</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="container-fluid hero">
                {/* <img src="images/hero.svg" alt="" /> */}
                <div className="container">
                    <h1 className="title-home">DIGITAL BUSINESS</h1>
                    <p>Seu bom negócio é aqui<br />
                    </p>
                    <div className="hero-btns">
                        <a data-scroll href="#about-us">Saiba Mais</a>
                        <a data-scroll href="#contact-us">Serviços</a>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header