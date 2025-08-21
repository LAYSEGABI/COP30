import Headphones from "../assets/headphones.svg";
import ImgPodcast from "../assets/ImgPodcast.png";
import '../styles/Podcast.css';

function Podcast() {
    return (
        <section className="podcast">
            <div className="container">
                <div className="descricao">
                    <h5>PODCAST</h5>
                    <h3>Clima de Diálogo</h3>
                    <p>Nosso podcast é um espaço de diálogo e escuta ativa sobre clima, justiça ambiental e soluções sustentáveis. </p>
                    <p>Com linguagem leve e acessível, reunimos especialistas, ativistas e jovens para discutir os desafios e caminhos da transição climática.</p>
                    <p>Com linguagem leve e acessível, reunimos especialistas, ativistas e jovens para discutir os desafios e caminhos da transição climática.</p>
                </div>
                <div className="cardPodcast">
                    <img src={ImgPodcast} alt="" />
                    <h4>Episódio 1: A Amazônia em Foco</h4>
                    <p>Com linguagem leve e acessível, reunimos especialistas, ativistas e jovens para discutir os desafios e caminhos da transição climática.</p>
                    <a href=""><img src={Headphones}  alt="" />Ouvir agora</a>
                </div>
            </div>
        </section>
    )
}

export default Podcast;