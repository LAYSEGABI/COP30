import "../styles/Hero.css";
import backVideo from '../assets/back.mp4';


function HeroSection() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline>
        <source src={backVideo} type="video/mp4" />
      </video>
      <div className="container">
        <h1>
          Juventudes brasileiras <br /> na COP30: o futuro começa agora
        </h1>
        <p>
          A juventude do Brasil está pronta para transformar o debate climático. <br />
          Em Belém, na Amazônia, vamos elevar nossas vozes rumo à justiça
          climática global.
        </p>
        <div className="CTAs">
          <a href="#">Conhecer o Projeto</a>
          <a href="#">Acessar o Guia COP30</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
