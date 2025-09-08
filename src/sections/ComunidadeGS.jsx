import MapaBrasil from "../assets/mapaBrasil.svg";
import "../styles/GS.css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // estilos básicos
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import ImgProjetoPampa from "../assets/pampa.png";
import ImgProjetoMotyro from "../assets/motyroCapa.png";
import ImgProjetoNossaHorta from "../assets/nossaHortaCapa.png";

function ComunidadeGS() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projetos = [
    {
      id: 1,
      titulo: "Clima Pampa",
      subtitulo: "Fortalecimento da agenda climática",
      local: "Porto Alegre - RS",
      descricao: `O Hub de Porto Alegre atuou em 2024 com foco no fortalecimento da agenda climática local por meio do projeto Clima à Pampa.  

A principal ação foi a construção de uma Carta-Compromisso voltada às eleições municipais, mobilizando candidaturas ao cargo de vereadora ou vereador em Porto Alegre para que assumissem compromissos com pautas ambientais e de combate às mudanças climáticas.  

A iniciativa buscou enfrentar a falta de conhecimento e de vontade política sobre a emergência climática no município, oferecendo como solução o engajamento pré-eleitoral e a capacitação dos mandatos eleitos.  

O projeto contou com 21 assinaturas, envolvendo 10 partidos, e impactou diretamente as eleições municipais, com dois mandatos eleitos comprometidos com a pauta: Natasha (PT) e Grazi Oliveira (PSOL).  

O projeto foi realizado em parceria com Youth Action Hub Porto Alegre, Net Impact Porto Alegre e Líderes da Realidade Climática | Núcleo RS.`,
      img: ImgProjetoPampa,
    },
    {
      id: 2,
      titulo: "Projeto Motyrõ",
      subtitulo: "Conectando áreas de vegetação e auxiliando na recuperação da Área de Proteção Ambiental.",
      local: "São Paulo - SP",
      descricao: "O projeto Motyrõ, do Global Shapers Hub São Paulo II em parceria com o Instituto Anchieta-Grajaú (IAG) desde 2023, realiza mutirões mensais de plantio para implantar um sistema agroflorestal local, conectando áreas de vegetação e auxiliando na recuperação da Área de Proteção Ambiental, além de impactar positivamente a comunidade do Grajaú. O IAG atua de forma sistêmica com a comunidade, oferecendo aulas para crianças, cursos para adultos, feiras e mais de 1.000 refeições diárias, além de projetos socioambientais, mas enfrenta desafios devido à ocupação de grande parte de seu terreno por assentamentos precários, o que gerou desmatamento e construções próximas ao leito do rio. Para recuperar essa área verde, o Motyrõ mobiliza voluntários em mutirões para o plantio de árvores frutíferas, legumes como mandioca, feijão, milho e adubo verde. Até dezembro de 2024, foram plantadas 778 árvores e engajados 165 voluntários. O projeto busca suporte financeiro para cobrir os custos dessas ações e garantir sua continuidade.",
      img: ImgProjetoMotyro,
    },
    {
      id: 3,
      titulo: "Nossa Horta",
      subtitulo: "Promove a segurança alimentar, geração de renda e educação climática em favelas do Rio",
      local: "Rio de janiero - RJ",
      descricao: `O Hub de Rio de Janeiro é responsável pelo projeto, com o intuito de promover a segurança alimentar, geração de renda e educação climática em favelas do Rio de Janeiro por meio da implementação de hortas comunitárias baseadas em práticas ancestrais, como o método do buraco de fechadura. \n 
      Atuando como catalisador de impacto, a iniciativa conecta pessoas, territórios e soluções socioambientais. \n Entre 2023 e 2026, já foram implementadas seis hortas em comunidades do Rio e o projeto foi replicado em hubs parceiros de Recife e Manaus. Reconhecido pelo The Climate Reality Project (2023) e pelo Innovation Prize (2024), o projeto segue em expansão com foco atual na digitalização da metodologia de plantio, visando ampliar seu alcance e impacto educativo. \n\n A iniciativa está alinhada ao eixo Protect the Planet do iSHAPE e fortalece práticas regenerativas nos territórios periféricos por meio da agroecologia. As principais ações incluíram: Implantação de 5 hortas em formato keyhole e 5 estufas em comunidades de baixa renda do Rio de Janeiro, beneficiando diretamente 100 famílias com produção de alimentos orgânicos e compostagem de resíduos. \n Fortalecimento do banco de sementes crioulas, com cultivo de espécies como milho, quiabo, berinjela, couve, brócolis e couve-flor, mais resistentes às mudanças climáticas. \n Valorização do uso de plantas medicinais e PANCs, por meio da troca de saberes entre jovens e pessoas idosas. Estímulo ao plantio de árvores frutíferas para geração de renda. Elaboração de um relatório com a metodologia, compartilhado com os 16 hubs brasileiros, dos quais 2 já se comprometeram com a replicação \n Resultados alcançados: \n 1 tonelada de alimentos orgânicos produzidos100 famílias beneficiadas diretamente \n 1 relatório compartilhado com 16 hubs brasileiros \n 2 workshops realizados com Shapers do Brasil e da América Latina`,
      img: ImgProjetoNossaHorta,
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
