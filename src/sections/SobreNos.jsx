import "../styles/SobreNos.css";

import galho from "../assets/galho.png";

import megafone from "../assets/megafone.svg";
import infraIcon from "../assets/infraIcon.svg";
import parceriasIcon from "../assets/parceriasIcon.svg";
import goverIcon from "../assets/goverIcon.svg";
import formacaoIcon from "../assets/fomacaoIcon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import translations from "../lang/translations"


import linkedin from "../assets/linkedin.svg";
import perfil from "../assets/perfil.png";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation";

function SobreNos({ lang }) {
  


  return (
    <section id="sobre-nos" className="sobre-nos">
      <div className="container">
        <div className="nosso-proposito">
          <div className="nosso-proposito-conteudo">
             <h5>{translations[lang].sobre}</h5>
        <h2>{translations[lang].sobre_titulo}</h2>
        <p>{translations[lang].sobre_desc}</p>
        <p>{translations[lang].sobre_futuro}</p>
          </div>
          <img src={galho} alt="" />
        </div>
        <div className="nossa-estrutura">
          <h2>Nossa Estrutura</h2>
          <div className="nossa-estrutura-conteudo">
            <div className="card">
              <h4>Comunicação</h4>
              <img src={megafone} alt="" />
              <p>
                Executar comunicação estratégica entre os hubs, ampliando o
                alcance, engajamento e o acesso à informação sobre a COP30,
                pautas e temas .
              </p>

            </div>
            <div className="card">
              <h4>Infraestrutura</h4>
              <img src={infraIcon} alt="" />
              <p>
                Realizar levantamentos logísticos e operacionais e coordenar a organização de eventos na COP30 em Belém, garantindo estrutura, acessibilidade e suporte técnico adequados.
              </p>

            </div>{" "}
            <div className="card">
              <h4>Parcerias</h4>
              <img src={parceriasIcon} alt="" />
              <p>
                Responsável por articular colaborações estratégicas, garantir apoios e patrocínios e viabilizar eventos do projeto voltados ao debate sobre a COP30.
              </p>

            </div>{" "}
            <div className="card">
              <h4>Governança</h4>
              <img src={goverIcon} alt="" />
              <p>
                Responsável pelo contato com o Fórum e hubs internacionais, além de liderar os grupos de trabalho e assegurar o bom andamento do projeto.
              </p>

            </div>{" "}
            <div className="card">
              <h4>Formação</h4>
              <img src={formacaoIcon} alt="" />
              <p>
              Oferecer capacitações com especialistas em sustentabilidade e clima, preparando os Shapers para contribuir  assertivamente na COP30.
              </p>

            </div>
          </div>
        </div>
        <div className="frase">
          <p>Nós somos únicos e diversos</p>
          <p>Comprometidos com a mudança</p>
          <p>Jovens moldando o futuro</p>
        </div>

        <div className="time">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20} // espaçamento entre slides
            loop={true}
            slidesPerView="auto"
            navigation={{ clickable: true }} // setas de navegação
          >
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Fernanda Lemos</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={perfil} alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SobreNos;
