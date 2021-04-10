import React from 'react'

import ContainerImage from './ContainerImage'
import NavBar from './NavBar'
import VideoBackground from './VideoBackground'
import VideoWeb from '../img/celular2.webm'

const Header = ({ children }) => {
    return (
        <header id="home" >
            <div className="container">
                <VideoBackground 
                    video={VideoWeb} 
                />
                <NavBar />
            </div>
            {children}
        </header >
    )
}

export default Header