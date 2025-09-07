import MapaBrasil from "../assets/mapaBrasil.svg";
import "../styles/GS.css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // estilos básicos
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgProjeto from "../assets/ImgProjeto.png";

function ComunidadeGS() {
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
                  Lorem ipsum dolor sit amet consectetur. Sit elit nisl
                  tincidunt arcu pharetra.
                </p>
                <a href="https://www.instagram.com/globalshapershubbelem/" className="saiba-mais">
                  Saiba mais
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
              <SwiperSlide>
                <div className="card-projeto">
                  <img src={ImgProjeto} alt="" />
                  <h3>Clima Pampa1</h3>
                  <p>Fortalecimento da agenda climática</p>
                  <p>Porto Alegre - RS, Brasil</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-projeto">
                  <img src={ImgProjeto} alt="" />
                  <h3>Clima Pampa2</h3>
                  <p>Fortalecimento da agenda climática</p>
                  <p>Porto Alegre - RS, Brasil</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-projeto">
                  <img src={ImgProjeto} alt="" />
                  <h3>Clima Pampa3</h3>
                  <p>Fortalecimento da agenda climática</p>
                  <p>Porto Alegre - RS, Brasil</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-projeto">
                  <img src={ImgProjeto} alt="" />
                  <h3>Clima Pampa4</h3>
                  <p>Fortalecimento da agenda climática</p>
                  <p>Porto Alegre - RS, Brasil</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-projeto">
                  <img src={ImgProjeto} alt="" />
                  <h3>Clima Pampa5</h3>
                  <p>Fortalecimento da agenda climática</p>
                  <p>Porto Alegre - RS, Brasil</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-projeto">
                  <img src={ImgProjeto} alt="" />
                  <h3>Clima Pampa6</h3>
                  <p>Fortalecimento da agenda climática</p>
                  <p>Porto Alegre - RS, Brasil</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-projeto">
                  <img src={ImgProjeto} alt="" />
                  <h3>Clima Pampa7</h3>
                  <p>Fortalecimento da agenda climática</p>
                  <p>Porto Alegre - RS, Brasil</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComunidadeGS;
