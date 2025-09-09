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
                        <p>Nosso podcast é um espaço de diálogo e escuta ativa sobre clima, justiça ambiental e soluções sustentáveis. </p>
                        <p>Com linguagem leve e acessível, reunimos especialistas, ativistas e jovens para discutir os desafios e caminhos da transição climática.</p>
                        <p>Com linguagem leve e acessível, reunimos especialistas, ativistas e jovens para discutir os desafios e caminhos da transição climática.</p>
                        <p>Com linguagem leve e acessível, reunimos especialistas, ativist linguagem leve e acessível, reunimos especialistas, ativistas e jovens para discutir os desafios e caminhos da transiçãoas e jovens para discutir os desafios e caminhos da transição climática.</p>
                    </div>
                    <div className="cardPodcast">
                        <img className="capaPodcast" src={ImgPodcast} alt="" />
                        <h4>{translations[lang].podcast_ep1}</h4>
                        <p>{translations[lang].podcast_ep1_desc}</p>
                        <a href="https://open.spotify.com/show/46BZ540yugO8OGgFG4uc4b" target="_blank"><img src={Headphones}  alt="" />{translations[lang].podcast_btn}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Podcast;