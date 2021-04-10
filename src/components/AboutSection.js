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
                        <p className="quem-somos">
                            Somos uma empresa que nasceu para ajudar micro e pequenos empreendedores a alcançarem os seus objetivos
                            de crescimento e de vendas através do marketing digital e de soluções tecnologicas modernas que são utilizadas
                            por grandes empresas no Brasil e no mundo.
                        </p>
                        <p className="quem-somos">
                            Seguimos as principais tendências publicitárias
                            (e criamos outras) para levar resultado para nossos
                            clientes. Especializados em campanhas digitais,
                            Gostamos de entender o dia-a-dia do seu negócio
                            e oferecer soluções personalizadas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection