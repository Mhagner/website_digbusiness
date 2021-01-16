import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5>BY</h5>
                        <h3>DIGITAL BUSINESS</h3>
                        <ul className="contact-nav">
                            <li><a data-scroll href="#home">Home</a></li>
                            <li><a data-scroll href="#about-us">Quem Somos</a></li>
                            <li><a data-scroll href="#portfolio">Portifólio</a></li>
                            <li><a data-scroll href="#blog">Blog</a></li>
                            <li><a data-scroll href="#contact-us">Contato</a></li>
                        </ul>
                        <h6>© 2019 - Doob,All Right Reserved</h6>
                        <ul className="social">
                            <li><a href="#"><i className="icofont-facebook" /></a></li>
                            <li><a href="#"><i className="icofont-twitter" /></a></li>
                            <li><a href="#"><i className="icofont-dribbble" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer