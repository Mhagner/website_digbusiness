import React from 'react'

const ServiceSection = () => {
    return (
        <section id="services" className="services">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-lg-4 service-txt">
                            <h2>
                                Tudo que o seu negócio precisa para entrar no mundo digital
                            </h2>
                            <div className="hero-btns service-btn">
                                <a data-scroll href="#">Mais serviços</a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="service-box">
                                <img src="images/service-icon1.svg" alt="" />
                                {/* Service Title */}
                                <h3>Marketing Digital &amp; Design</h3>
                                {/* Replace Patch to Image Under */}
                                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                      tincidunt.</p>
                                <div className="hero-btns service-btn">
                                    <a data-scroll href="#services">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="service-box">
                                <img src="images/service-icon2.svg" alt="" />
                                {/* Service Title */}
                                <h3>Desenvolvimento <br /> de Sites &amp; Aplicativos</h3>
                                {/* Service Info */}
                                <p>
                                    Desenvolvemos as melhores soluções para que o seu negócio seja
                                    conhecido e escale com a ajuda da tecnologia.
                                </p>
                                <div className="hero-btns service-btn">
                                    <a data-scroll href="#services">Ver mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection