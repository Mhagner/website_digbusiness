import React from 'react'

import ContainerImage from './ContainerImage'
import NavBar from './NavBar'
import VideoBackground from './VideoBackground'
import VideoWeb from '../img/celular2.webm'

const Header = () => {
    return (
        <header id="home" >
            <div className="container">
                <VideoBackground 
                    video={VideoWeb} 
                />
                <NavBar />
            </div>
            <ContainerImage
                titleHome1="Modernize o seu negócio"
                titleHome2="com a Digital Business"
                subTitle1="Oferecemos nossa expertise digital para modernizar o seu negócio"
                subTitle2="e fazer com que sua empresa seja referência no mundo digital"
                linkName="Saiba mais"
                buttonName="Nossos Projetos"
                linkImage="images/hero.svg"
            />
        </header >
    )
}

export default Header