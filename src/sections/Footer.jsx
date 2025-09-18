import '../styles/Footer.css';
import Logo from '../assets/logo.svg';
import Insta from '../assets/insta.svg';
import Linkedin from '../assets/linkedinRodape.svg';
import Spotify from '../assets/spotify.svg';
import Youtube from '../assets/youtube.svg';
import Email from '../assets/email.svg';

import translations from "../lang/translations";

function Footer({lang}) {
  return (
  <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-content">
          <img className="logo" src={Logo} alt="Logo" />

          <div className="categorias">
            <a href="#comunidade">{translations[lang].footer_menu[0]}</a>
            <a href="#cop30">{translations[lang].footer_menu[1]}</a>
            <a href="#podcast">{translations[lang].footer_menu[2]}</a>
            <a href="#sobre-nos">{translations[lang].footer_menu[3]}</a>
          </div>

          <div className="redes">
            <a
              href="https://www.instagram.com/shaperspeloclima/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Insta} alt="Logo" />
              <p>{translations[lang].footer_instagram}</p>
            </a>

            <a
              href="https://www.linkedin.com/posts/shapers-pelo-clima_o-shapers-pelo-clima-marcou-presen%C3%A7a-com-activity-7361022746954285057-OBTB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBEh1EBeYqmoeWbb4HHreXN8tDMZpjLiOo"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Logo" />
              <p>{translations[lang].footer_linkedin}</p>
            </a>

            <a
              href="https://open.spotify.com/show/46BZ540yugO8OGgFG4uc4b"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Spotify} alt="Logo" />
              <p>{translations[lang].footer_spotify}</p>
            </a>

            <a
              href="https://www.youtube.com/@GlobalShaperspeloClima"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Youtube} alt="Logo" />
              <p>{translations[lang].footer_youtube}</p>
            </a>

            <a
              href={`mailto:${translations[lang].footer_email}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={Email} alt="Logo" />
              <p>{translations[lang].footer_email}</p>
            </a>
          </div>
        </div>

        <hr />

        <p className="copyright">{translations[lang].footer_direitos}</p>
      </div>
    </footer>
  )
};

export default Footer;