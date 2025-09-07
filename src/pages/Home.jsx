import '/src/styles/global.css';;
import Header from '../sections/Header.jsx';
import HeroSection from '../sections/Hero.jsx';
import FaixaDivisao from '../components/FaixaDivisao.jsx';
import SobreNos from '../sections/SobreNos.jsx';
import ComunidadeGS from '../sections/ComunidadeGS.jsx';
import GuiaCOP30 from '../sections/GuiaCOP30.jsx';
import Podcast from '../sections/Podcast.jsx';
import Artigos from '../sections/Artigos.jsx';
import Footer from '../sections/Footer.jsx';


function Home({ lang, setLang }) {
  return (
    <>
      <Header lang={lang} setLang={setLang}  />
      <HeroSection lang={lang} />
      <FaixaDivisao />    
      <SobreNos lang={lang} />
      <ComunidadeGS lang={lang}/>
      <FaixaDivisao />
      <GuiaCOP30 lang={lang}/>
      <Podcast lang={lang}/>
      <Artigos lang={lang}/>
      <Footer lang={lang}/>
    </>
  )
}

export default Home;