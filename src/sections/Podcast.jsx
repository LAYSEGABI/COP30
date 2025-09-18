import Headphones from "../assets/headphones.svg";
import ImgPodcast from "../assets/Capa-Podcast-Shapers-pelo-Clima.png";
import '../styles/Podcast.css';

import translations from "../lang/translations";

function Podcast({ lang }) {
    return (
         <section id="podcast" className="podcast">
      <div className="container">
        <div className="bloco">
          <div className="descricao">
            <h5>PODCAST</h5>

            <h2>{translations[lang].podcast_titulo}</h2>
            <p>{translations[lang].podcast_desc1}</p>

            <h2>{translations[lang].podcast_subtitulo}</h2>
            <p>{translations[lang].podcast_desc2}</p>

            <h3>{translations[lang].podcast_participa_titulo}</h3>
            <ul>
              <li>{translations[lang].podcast_participa_1}</li>
              <li>{translations[lang].podcast_participa_2}</li>
              <li>{translations[lang].podcast_participa_3}</li>
            </ul>

            <p className="chamada">{translations[lang].podcast_chamada}</p>
          </div>

          <div className="cardPodcast">
            <img className="capaPodcast" src={ImgPodcast} alt="" />
            <h4>{translations[lang].podcast_ep1}</h4>
            <p>{translations[lang].podcast_ep1_desc}</p>
            <a
              href="https://open.spotify.com/show/46BZ540yugO8OGgFG4uc4b"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Headphones} alt="" />
              {translations[lang].podcast_btn}
            </a>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Podcast;