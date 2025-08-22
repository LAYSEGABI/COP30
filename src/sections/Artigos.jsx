import ImgProjeto from "../assets/fotoArtigos.png";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // estilos básicos
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Artigos.css";
import IconVerMais from "../assets/eye-solid.svg";

function Artigos() {
  return (
    <section id="artigos" className="artigos">
      <div className="container">
        <h5>ARTIGOS</h5>
        <h2>Últimas Postagens</h2>

        <div className="container-artigos">
          <div className="card-projeto">
            <img src={ImgProjeto} alt="" />
            <h3>Marcele Oliveira participa da cúpula dos Global Shapers</h3>
            <p>Artigo do Medium</p>
            <p>15 de julho, 2025</p>
            <div className="footer-item">
              <p>5 min read</p>
              <a href=""><img src={IconVerMais} alt="" />Ver mais</a>
            </div>
          </div>
          <div className="card-projeto">
            <img src={ImgProjeto} alt="" />
            <h3>Marcele Oliveira participa da cúpula dos Global Shapers</h3>
            <p>Artigo do Medium</p>
            <p>15 de julho, 2025</p>
            <div className="footer-item">
              <p>5 min read</p>
              <a href=""><img src={IconVerMais} alt="" />Ver mais</a>
            </div>
          </div>
          <div className="card-projeto">
            <img src={ImgProjeto} alt="" />
            <h3>Marcele Oliveira participa da cúpula dos Global Shapers</h3>
            <p>Artigo do Medium</p>
            <p>15 de julho, 2025</p>
            <div className="footer-item">
              <p>5 min read</p>
              <a href=""><img src={IconVerMais} alt="" />Ver mais</a>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default Artigos;