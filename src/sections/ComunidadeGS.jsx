import MapaBrasil from "../assets/mapaBrasil.svg";
import "../styles/GS.css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // estilos básicos
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import React, { useState } from "react";
import translations from "../lang/translations";

import ImgProjetoPampa from "../assets/pampa.png";
import ImgProjetoMotyro from "../assets/motyroCapa.png";
import ImgProjetoNossaHorta from "../assets/nossaHortaCapa.png";
import ImgProjetoEcotrilhas from "../assets/imgEcotrilhas.png";

function ComunidadeGS({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const projetos = translations[lang].projetos;
  
  
  return (
    <section id="comunidade" className="global-shapers">
      <div className="container">
        <div className="comunidade-gs">
          <h5>{translations[lang].comunidade}</h5>
          <h2>{translations[lang].comunidade_titulo}</h2>
          <p>{translations[lang].comunidade_desc}</p>

          <div className="container-comunidade">
            <div className="conteudo">
              <h3>{translations[lang].comunidade_hubs}</h3>
              <p>{translations[lang].comunidade_info}</p>
              <p>{translations[lang].comunidade_historia}</p>
              <p>{translations[lang].comunidade_rede}</p>
              <div className="conteudo-dados">
                <div>
                  <p>500</p>
                  <p>Hubs</p>
                </div>
                <div>
                  <p>150</p>
                  <p>{translations[lang].comunidade_dados.paises}</p>
                </div>
                <div>
                  <p>10mil</p>
                  <p>{translations[lang].comunidade_dados.jovens}</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <img src={MapaBrasil} alt="Mapa do Brasil" className="map" />

              <div className="map-popup">
                <h3>Hub Belém</h3>
                <p>{translations[lang].comunidade_hub_belem}</p>
                <a
                  href="https://www.instagram.com/globalshapershubbelem/"
                  className="saiba-mais"
                >
                  {translations[lang].comunidade_hub_belem_cta}
                </a>
              </div>
            </div>
          </div>

          <h2>{translations[lang].comunidade_projetos}</h2>
          <p>{translations[lang].comunidade_projetos_desc}</p>

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
          {/* usa a imagem do próprio projeto */}
          <img src={proj.img} alt={proj.titulo} />
          <h3>{proj.titulo}</h3>
          <p className="local">{proj.local}</p>
          <p>{proj.subtitulo}</p>
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
        <button className="close-btn" onClick={() => setIsOpen(false)}>
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
