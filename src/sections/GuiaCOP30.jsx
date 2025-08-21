import '../styles/GuiaCOP30.css';
import ImgGuiaCOP from "../assets/ImgGuiaCOP.png";
import ImgPDF from "../assets/imgpdf.png";
import IconDownload from "../assets/download.svg";


function GuiaCOP30() {
  return (
    <section className="GuiaCOP30">
      <h5>COP 30</h5>
      <h2>COP30: O Clima no Centro da Amazônia</h2>
      <p>
        Se você vai à COP30, preparamos um guia completo com tudo o que você
        precisa saber sobre <br /> Belém: cultura, transporte, gastronomia,
        acolhimento, segurança e pontos de interesse.
      </p>
      <div className="guiaCop-conteudo">
        <div className='descricao'>
          <img className='mascoteGuia' src={ImgGuiaCOP} alt="" />
          <p>
            Se você vai à COP30, preparamos um guia completo com tudo o que você
            precisa saber sobre Belém: cultura, transporte, gastronomia,
            acolhimento, segurança e pontos de interesse.
          </p>
          <p>
            O encontro acontecerá em Belém (PA), no coração da Amazônia,
            conectando lideranças mundiais, cientistas, ativistas e juventudes
            de todo o planeta para debater soluções reais para o futuro do
            clima.
          </p>
          <p>
            Como país anfitrião, o Brasil assume um papel de liderança na busca
            por consensos globais, propondo metas para reduzir as emissões de
            gases de efeito estufa e proteger nossos biomas.
          </p>
        </div>
        <div className="pdf">
            <a href="./public/Guia-de-Belem.pdf" download="Guia-de-Belem.pdf"><img src={ImgPDF} alt="" /></a>
            <a className='baixarGuia' href="./public/Guia-de-Belem.pdf" download="Guia-de-Belem.pdf">
              <img src={IconDownload} alt="" />Baixe o guia aqui
            </a>
        </div>
      </div>
    </section>
  );
}

export default GuiaCOP30;
