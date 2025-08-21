import '../styles/Footer.css';
import Logo from '../assets/logo.svg';
import Insta from '../assets/insta.svg';

function Footer() {
  return (
  <footer className="footer">
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
           <a href=""><img src={Insta} alt="Logo" /><p>@shaperspeloclima</p></a>
           <a href=""><img src={Insta} alt="Logo" /><p>@shaperspeloclima</p></a>
        </div>
         
    </div>
    <br />
    <p>
       ©2025. Shapers Pelo Clima 
    </p>
</div>
  </footer>
  )
};

export default Footer;