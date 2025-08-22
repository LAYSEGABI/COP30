import "../styles/Header.css";
import logo from '../assets/logo.svg'; 

function Header() {
  return (
    <header className="header">
      <div className="container">
          <div className="header__logo">
            <img src={logo} alt="Shapers pelo Clima" />
          </div>
          <nav className="header__nav">
            <ul>
              <li className="sobre-nos-header"><a href="#sobre-nos">Sobre nós</a></li>
              <li><a href="#comunidade">Comunidade</a></li>
              <li className="cop30"><a href="#cop30">COP 30</a></li>
              <li><a href="#podcast">Podcast</a></li>
              <li><a href="#artigos">Artigos</a></li>
        
            </ul>
            <a href="#footer" className="btn-cta">Contate-nos</a>
          </nav>
      </div>
    </header>
  );
}

export default Header;
