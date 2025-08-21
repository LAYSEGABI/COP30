import "../styles/SobreNos.css";
import galho from "../assets/galho.png";
import megafone from "../assets/megafone.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import seta from "../assets/seta.svg";
import linkedin from "../assets/linkedin.svg";
import perfil from "../assets/perfil.png";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // estilos básicos
import "swiper/css/navigation";

function SobreNos() {
  return (
    <section id="sobre-nos" className="sobre-nos">
      <div className="container">
        <div className="nosso-proposito">
          <div className="nosso-proposito-conteudo">
            <h5>Sobre Nós</h5>
            <h2>Nosso Propósito</h2>
            <p>
              O Shapers Pelo Clima é uma mobilização nacional e internacional da
              Global Shapers Community que conecta juventudes para agir frente à
              crise climática.
            </p>
            <p>
              Estamos unindo mais de 20 hubs no Brasil e no mundo para construir
              um futuro justo, sustentável e liderado por jovens.
            </p>{" "}
            <p>
              Estamos unindo mais de 20 hubs no Brasil e no mundo para construir
              um futuro justo, sustentável e liderado por jovens.
            </p>
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
              <a href="">
                Saiba mais <img src={seta} alt="" />
              </a>
            </div>
            <div className="card">
              <h4>Comunicação</h4>
              <img src={megafone} alt="" />
              <p>
                Executar comunicação estratégica entre os hubs, ampliando o
                alcance, engajamento e o acesso à informação sobre a COP30,
                pautas e temas .
              </p>
              <a href="">
                Saiba mais <img src={seta} alt="" />
              </a>
            </div>{" "}
            <div className="card">
              <h4>Comunicação</h4>
              <img src={megafone} alt="" />
              <p>
                Executar comunicação estratégica entre os hubs, ampliando o
                alcance, engajamento e o acesso à informação sobre a COP30,
                pautas e temas .
              </p>
              <a href="">
                Saiba mais <img src={seta} alt="" />
              </a>
            </div>{" "}
            <div className="card">
              <h4>Comunicação</h4>
              <img src={megafone} alt="" />
              <p>
                Executar comunicação estratégica entre os hubs, ampliando o
                alcance, engajamento e o acesso à informação sobre a COP30,
                pautas e temas .
              </p>
              <a href="">
                Saiba mais <img src={seta} alt="" />
              </a>
            </div>{" "}
            <div className="card">
              <h4>Comunicação</h4>
              <img src={megafone} alt="" />
              <p>
                Executar comunicação estratégica entre os hubs, ampliando o
                alcance, engajamento e o acesso à informação sobre a COP30,
                pautas e temas .
              </p>
              <a href="">
                Saiba mais <img src={seta} alt="" />
              </a>
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
