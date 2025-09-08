import MapaBrasil from "../assets/mapaBrasil.svg";
import "../styles/GS.css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // estilos básicos
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import ImgProjeto from "../assets/ImgProjeto.png";

function ComunidadeGS() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projetos = [
    {
      id: 1,
      titulo: "Clima Pampa1",
      subtitulo: "Fortalecimento da agenda climática",
      local: "Porto Alegre - RS, Brasil",
      descricao: `🌱 CLIMA À PAMPA  
O Hub de Porto Alegre atuou em 2024 com foco no fortalecimento da agenda climática local por meio do projeto Clima à Pampa.  

A principal ação foi a construção de uma Carta-Compromisso voltada às eleições municipais, mobilizando candidaturas ao cargo de vereadora ou vereador em Porto Alegre para que assumissem compromissos com pautas ambientais e de combate às mudanças climáticas.  

A iniciativa buscou enfrentar a falta de conhecimento e de vontade política sobre a emergência climática no município, oferecendo como solução o engajamento pré-eleitoral e a capacitação dos mandatos eleitos.  

O projeto contou com 21 assinaturas, envolvendo 10 partidos, e impactou diretamente as eleições municipais, com dois mandatos eleitos comprometidos com a pauta: Natasha (PT) e Grazi Oliveira (PSOL).  

O projeto foi realizado em parceria com Youth Action Hub Porto Alegre, Net Impact Porto Alegre e Líderes da Realidade Climática – Núcleo RS.`,
      img: ImgProjeto,
    },
    {
      id: 2,
      titulo: "Clima Pampa2",
      subtitulo: "Fortalecimento da agenda climática",
      local: "Porto Alegre - RS, Brasil",
      descricao: "Aqui viria o conteúdo detalhado do projeto 2...",
      img: ImgProjeto,
    },
    // pode adicionar mais projetos aqui
  ];

  return (
    <section id="comunidade" className="global-shapers">
      <div className="container">
        <div className="comunidade-gs">
          <h5>COMUNIDADE</h5>
          <h2>A Global Shapers</h2>
          <p>
            Uma comunidade global de jovens que acreditam no poder da ação local
            para gerar impacto global.{" "}
          </p>

          <div className="container-comunidade">
            <div className="conteudo">
              <h3>Hubs que estão no clima da COP</h3>
              <p>
                +20 hubs nacionais e internacionais unidos em prol da justiça
                climática. Na COP30, nossa voz ecoa diretamente da Amazônia para
                o mundo.
              </p>
              <p>
                Criada em 2011 pelo Fórum Econômico Mundial, a Global Shapers
                Community reúne mais de 10 mil jovens em mais de 500 hubs
                espalhados por 150 países.{" "}
              </p>
              <p>
                É uma rede global de jovens líderes comprometidos com a
                transformação positiva de suas comunidades e do mundo.
              </p>
              <div className="conteudo-dados">
                <div>
                  <p>500</p>
                  <p>Hubs</p>
                </div>
                <div>
                  <p>150</p>
                  <p>Países</p>
                </div>
                <div>
                  <p>10mil</p>
                  <p>Jovens</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <img src={MapaBrasil} alt="Mapa do Brasil" className="map" />

              <div className="map-popup">
                <h3>Hub Belém</h3>
                <p>
                  Segundo hub do Norte do Brasil, estabelecido em 2025, com foco
                  em sustentabilidade, impacto social e tecnologia. Inspirado
                  pela Amazônia, conecta inovação local a soluções globais.
                </p>
                <a
                  href="https://www.instagram.com/globalshapershubbelem/"
                  className="saiba-mais"
                >
                  Conheça as iniciativas do hub.
                </a>
              </div>
            </div>
          </div>

          <h2>Projetos da Comunidade</h2>
          <p>
            Nossos projetos atuam em frentes como justiça climática, equidade
            racial, segurança alimentar, agroecologia e transição energética.
          </p>

          <div className="container-projetos">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              loop={true}
              slidesPerView={4}
              navigation={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
            >
              {projetos.map((proj) => (
                <SwiperSlide key={proj.id}>
                  <div
                    className="card-projeto"
                    onClick={() => {
                      setSelectedProject(proj);
                      setIsOpen(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={proj.img} alt={proj.titulo} />
                    <h3>{proj.titulo}</h3>
                    <p>{proj.subtitulo}</p>
                    <p>{proj.local}</p>
                  </div>
                </SwiperSlide>
              ))}
              {projetos.map((proj) => (
                <SwiperSlide key={proj.id}>
                  <div
                    className="card-projeto"
                    onClick={() => {
                      setSelectedProject(proj);
                      setIsOpen(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={proj.img} alt={proj.titulo} />
                    <h3>{proj.titulo}</h3>
                    <p>{proj.subtitulo}</p>
                    <p>{proj.local}</p>
                  </div>
                </SwiperSlide>
              ))}{" "}
              {projetos.map((proj) => (
                <SwiperSlide key={proj.id}>
                  <div
                    className="card-projeto"
                    onClick={() => {
                      setSelectedProject(proj);
                      setIsOpen(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={proj.img} alt={proj.titulo} />
                    <h3>{proj.titulo}</h3>
                    <p>{proj.subtitulo}</p>
                    <p>{proj.local}</p>
                  </div>
                </SwiperSlide>
              ))}{" "}
              {projetos.map((proj) => (
                <SwiperSlide key={proj.id}>
                  <div
                    className="card-projeto"
                    onClick={() => {
                      setSelectedProject(proj);
                      setIsOpen(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={proj.img} alt={proj.titulo} />
                    <h3>{proj.titulo}</h3>
                    <p>{proj.subtitulo}</p>
                    <p>{proj.local}</p>
                  </div>
                </SwiperSlide>
              ))}{" "}
              {projetos.map((proj) => (
                <SwiperSlide key={proj.id}>
                  <div
                    className="card-projeto"
                    onClick={() => {
                      setSelectedProject(proj);
                      setIsOpen(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={proj.img} alt={proj.titulo} />
                    <h3>{proj.titulo}</h3>
                    <p>{proj.subtitulo}</p>
                    <p>{proj.local}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Modal */}
            {isOpen && selectedProject && (
              <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro
                >
                  <button
                    className="close-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    X
                  </button>
                  <h2>{selectedProject.titulo}</h2>
                  <img src={selectedProject.img} alt={selectedProject.titulo} />
                  <p>{selectedProject.descricao}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComunidadeGS;
