import React from "react";

import PhotoBox from "./PhotoBox";

import Image1 from "../img/publico/marketing-1.jpeg";
import Image2 from "../img/publico/design-1.jpeg";
import Image3 from "../img/publico/trafego-1.jpeg";
import Image4 from "../img/publico/instagram.jpeg";
import Image5 from "../img/publico/anuncios.jpeg";
import Image6 from "../img/publico/identidade-visual.jpeg";
 

const text = {
  textOne: "Considerado uma das principais tendências do marketing digital, o marketing de conteúdo permite atrair, converter e fidelizar clientes por meio de conteúdo relevante.",
  textTwo: "Essa é uma das principais formas de uma empresa ser reconhecida no mercado. Personalidade, identificação com o público e uma leitura agradável de elementos gráficos são algumas das principais vantagens dessa ferramenta do design.",
  textThree: "No mundo digital, tráfego se refere à movimentação de usuários que navegam entre páginas. Ou seja, assim como o tráfego de trânsito diz respeito à circulação de veículos, o tráfego na internet trata do fluxo de usuários.",
  textFour: "No Instagram, as hashtags se tornaram ferramentas para segmentar conteúdos e são umas das formas de busca da plataforma. O seu uso é visto como uma prática muito eficaz para aumentar a visibilidade e o impacto do perfil.",
  textFive: "Tudo o que você precisa fazer é obter o seu público-alvo certo para evitar gastar com pessoas que provavelmente não levarão a uma venda.",
  textSix: "A primeira coisa quando você quer fazer sua identidade visual é contratar um designer para executar o projeto da sua identidade visual, na maioria dos casos, o designer vai estar fazendo um questionário antes de começar a estar começando o projeto da identidade visual. E é de suma importância que você responda essas perguntas que o designer fizer."
}

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Inserindo o seu negócio <br />
                no mundo digital
              </h2>
            </div>
          </div>
          <div className="row">
            <PhotoBox image={Image1} label={text.textOne} />
            <PhotoBox image={Image2} label={text.textTwo} />
            <PhotoBox image={Image3} label={text.textThree} />
            <PhotoBox image={Image4} label={text.textFour} />
            <PhotoBox image={Image5} label={text.textFive} />
            <PhotoBox image={Image6} label={text.textSix} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
