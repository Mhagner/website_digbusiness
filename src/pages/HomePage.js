import React from "react";

import AboutSection from "../components/AboutSection";
import ContainerImage from "../components/ContainerImage";
import PortfolioSection from "../components/PortfolioSection";
import ServiceSection from "../components/ServiceSection";
import Template from "../components/Template";

const HomePage = () => {
  return (
    <div>
      <Template>
        <ContainerImage
          titleHome1="Modernize o seu negócio"
          titleHome2="com a Digital Business"
          subTitle1="Oferecemos nossa expertise digital para modernizar o seu negócio"
          subTitle2="e fazer com que sua empresa seja referência no mundo digital"
          linkName="Saiba mais"
          buttonName="Nossos Projetos"
        />
        <AboutSection />
        <ServiceSection />
        <PortfolioSection />
      </Template>
    </div>
  );
};

export default HomePage;
