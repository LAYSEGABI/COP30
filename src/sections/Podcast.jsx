import Headphones from "../assets/headphones.svg";
import ImgPodcast from "../assets/imgPodcast.png";
import '../styles/Podcast.css';

function Podcast() {
    return (
        <section id="podcast" className="podcast">
            <div className="container">
                <div className="bloco">
                    <div className="descricao">
                        <h5>PODCAST</h5>
                        <h2>Clima de Diálogo</h2>
                        <p>Nosso podcast é um espaço de diálogo e escuta ativa sobre clima, justiça ambiental e soluções sustentáveis. </p>
                        <p>Com linguagem leve e acessível, reunimos especialistas, ativistas e jovens para discutir os desafios e caminhos da transição climática.</p>
                        <p>Com linguagem leve e acessível, reunimos especialistas, ativistas e jovens para discutir os desafios e caminhos da transição climática.</p>
                        <p>Com linguagem leve e acessível, reunimos especialistas, ativist linguagem leve e acessível, reunimos especialistas, ativistas e jovens para discutir os desafios e caminhos da transiçãoas e jovens para discutir os desafios e caminhos da transição climática.</p>
                    </div>
                    <div className="cardPodcast">
                        <img className="capaPodcast" src={ImgPodcast} alt="" />
                        <h4>Episódio 1: A Amazônia em Foco</h4>
                        <p>Com linguagem leve e acessível, reunimos especialistas, ativistas e jovens para discutir os desafios e caminhos da transição climática.</p>
                        <a href=""><img src={Headphones}  alt="" />Ouvir agora</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Podcast;