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
              <li><a href="#">Comunidade</a></li>
              <li><a href="#">COP 30</a></li>
              <li><a href="#">Podcast</a></li>
              <li><a href="#">Artigos</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
            <a className="btn-cta">Junte-se a nós</a>
          </nav>
      </div>
    </header>
  );
}

export default Header;
