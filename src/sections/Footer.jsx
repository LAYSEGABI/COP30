import '../styles/Footer.css';
import Logo from '../assets/logo.svg';
import Insta from '../assets/insta.svg';
import Linkedin from '../assets/linkedinRodape.svg';
import Spotify from '../assets/spotify.svg';
import Email from '../assets/email.svg';

function Footer() {
  return (
  <footer id='footer' className="footer">
<div className="container">
    <div className="footer-content">
        <img className='logo' src={Logo} alt="Logo" />
        <div className="categorias">
            <a href="">Comunidade</a>
            <a href="">COP 30</a>
            <a href="">Podcast</a>
            <a href="">Artigos</a>
            <a href="">Sobre nós</a>
        </div>
        <div className="redes">
           <a href=""><img src={Insta} alt="Logo" /><p>@shaperspeloclima</p></a>
           <a href=""><img src={Linkedin} alt="Logo" /><p>Shapers pelo Clima</p></a>
           <a href=""><img src={Spotify} alt="Logo" /><p>Clima de Diálogo</p></a>
           <a href=""><img src={Email} alt="Logo" /><p>cop30@globalshapers.com.br</p></a>
        </div>
         
    </div>
    <hr />
    <p className='copyright'>
        <span>Global Shapers</span> é uma iniciativa do Fórum Econômico Mundial ©2025 Shapers Pelo Clima 
    </p>
</div>
  </footer>
  )
};

export default Footer;