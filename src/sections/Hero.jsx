import "../styles/Hero.css";
import backVideo from '../assets/back.mp4';
import translations from "../lang/translations";

function HeroSection({ lang}) {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline>
        <source src={backVideo} type="video/mp4" />
      </video>
      <div className="container">
        <h1>
          {translations[lang].hero_juventude_titulo}
        </h1>
        <p>
          {translations[lang].hero_juventude_desc}
        </p>
        <div className="CTAs">
          <a href="#sobre-nos">{translations[lang].hero_juventude_btn_1}</a>
          <a href="#cop30">{translations[lang].hero_juventude_btn_2}</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
