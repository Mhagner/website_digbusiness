import React from "react";

import PhotoBox from "./PhotoBox";

import Image1 from "../img/1.png";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Veja algumas das soluções <br />
                que já criamos
              </h2>
            </div>
          </div>
          <div className="row">
            <PhotoBox image={Image1} label="Imagem 1" />
            <PhotoBox image={Image1} label="Imagem 2" />
            <PhotoBox image={Image1} label="Imagem 3" />
            <PhotoBox image={Image1} label="Imagem 4" />
            <PhotoBox image={Image1} label="Imagem 5" />
            <PhotoBox image={Image1} label="Imagem 6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
