import '../styles/Footer.css';
import Logo from '../assets/logo.svg';
import Insta from '../assets/insta.svg';
import Linkedin from '../assets/linkedinRodape.svg';
import Spotify from '../assets/spotify.svg';
import Youtube from '../assets/youtube.svg';
import Email from '../assets/email.svg';

function Footer() {
  return (
  <footer id='footer' className="footer">
<div className="container">
    <div className="footer-content">
        <img className='logo' src={Logo} alt="Logo" />
        <div className="categorias">
            <a href="#comunidade">Comunidade</a>
            <a href="#cop30">COP 30</a>
            <a href="#podcast">Podcast</a>
            <a href="#sobre-nos">Sobre nós</a>
        </div>
        <div className="redes">
           <a href="https://www.instagram.com/shaperspeloclima/" target='_blank'><img src={Insta} alt="Logo" /><p>@shaperspeloclima</p></a>
           <a href="https://www.linkedin.com/posts/shapers-pelo-clima_o-shapers-pelo-clima-marcou-presen%C3%A7a-com-activity-7361022746954285057-OBTB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBEh1EBeYqmoeWbb4HHreXN8tDMZpjLiOo" target='_blank'><img src={Linkedin} alt="Logo" /><p>Shapers pelo Clima</p></a>
           <a href="https://open.spotify.com/show/46BZ540yugO8OGgFG4uc4b" target='_blank'><img src={Spotify} alt="Logo" /><p>Clima de Diálogo</p></a>
            <a href="https://www.youtube.com/@GlobalShaperspeloClima" target='_blank'><img src={Youtube} alt="Logo" /><p>Shapers pelo CLima</p></a>
           <a href="mailto:cop30@globalshapers.com.br" target='_blank'><img src={Email} alt="Logo" /><p>cop30@globalshapers.com.br</p></a>
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