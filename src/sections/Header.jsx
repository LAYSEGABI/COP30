import "../styles/Header.css";
import logo from "../assets/logo.svg";
import translations from "../lang/translations";

import brFlag from "../assets/bandeiras/brasil.png";
import usFlag from "../assets/bandeiras/eua.png";
import esFlag from "../assets/bandeiras/espanha.png";


function Header({ lang, setLang }) {

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="Shapers pelo Clima" />
        </div>
        <nav className="header__nav">
          <ul>
            <li className="sobre-nos-header">
              <a href="#sobre-nos">{translations[lang].sobre}</a>
            </li>
            <li>
              <a href="#comunidade">{translations[lang].comunidade}</a>
            </li>
            <li className="cop30">
              <a href="#cop30">COP 30</a>
            </li>
            <li>
              <a href="#podcast">Podcast</a>
            </li>
            {/*<li>
              <a href="#artigos">{translations[lang].artigos}</a>
            </li> */}
          </ul>

       
          <div className="langs">
            <button className="lang-btn" onClick={() => setLang("pt")}>
              <img src={brFlag} alt="Português" className="flag-icon" />
       
            </button>
            <button className="lang-btn" onClick={() => setLang("en")}>
              <img src={usFlag} alt="English" className="flag-icon" />
        
            </button>
            <button className="lang-btn" onClick={() => setLang("es")}>
              <img src={esFlag} alt="Español" className="flag-icon" />
        
            </button>
          </div>

          <div className="langs-mobile">
            <button className="lang-btn" onClick={() => setLang("pt")}>
              <img src={brFlag} alt="Português" className="flag-icon" />
            </button>
            <button className="lang-btn" onClick={() => setLang("en")}>
              <img src={usFlag} alt="English" className="flag-icon" />
            </button>
            <button className="lang-btn" onClick={() => setLang("es")}>
              <img src={esFlag} alt="Español" className="flag-icon" />
            </button>
          </div>

          <a href="#footer" className="btn-cta">
            {translations[lang].contato}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
