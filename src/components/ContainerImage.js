import React from 'react'
import '../styles/header.scss'

const ContainerImage = ({ titleHome1, titleHome2, subTitle1, subTitle2, buttonName, linkName, linkImage }) => {
    return (
        <div className="container-fluid hero">
            <img src={linkImage} alt="" />
            <div className="container">
                <h1 className="container--title-home">{titleHome1}<br /> {titleHome2}</h1>
                <p className="container--subtitle">{subTitle1}<br /> {subTitle2}</p>
                <div className="hero-btns">
                    <a data-scroll href="#about-us">{buttonName}</a>
                    <a data-scroll href="#contact-us">{linkName}</a>
                </div>
            </div>
        </div>
    )
}

export default ContainerImage