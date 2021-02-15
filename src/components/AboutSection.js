import React from 'react'

const AboutSection = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-6">
                        <img src="images/aboutimg.svg" alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6">
                        <h2>Quem Somos?</h2>
                        <p>Somos uma empresa que nasceu para ajudar micro e pequenos empreendedores a alcançarem os seus objetivos
                            de crescimento e de vendas através do marketing digital e de soluções tecnologicas modernas que são utilizadas
                            por grandes empresas no Brasil e no mundo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection