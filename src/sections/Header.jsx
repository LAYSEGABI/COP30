import "../styles/Header.css";
import logo from "../assets/logo.svg";
import translations from "../lang/translations";


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
              PT
            </button>
            <button className="lang-btn" onClick={() => setLang("en")}>
              EN
            </button>
            <button className="lang-btn" onClick={() => setLang("es")}>
              ES
            </button>
          </div>

          <div className="langs-mobile">
            <button className="lang-btn" onClick={() => setLang("pt")}>
              PT
            </button>
            <button className="lang-btn" onClick={() => setLang("en")}>
              EN
            </button>
            <button className="lang-btn" onClick={() => setLang("es")}>
              ES
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
