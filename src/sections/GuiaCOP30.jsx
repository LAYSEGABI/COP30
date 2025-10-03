import "../styles/GuiaCOP30.css";
import ImgGuiaCOP from "../assets/ImgGuiaCop.png";
import ImgPDF from "../assets/imgpdf.png";
import IconDownload from "../assets/download.svg";

import translations from "../lang/translations";

const pdfs = {
  pt: "./public/Guia-de-Belem-PT.pdf",
  en: "./public/Guia-de-Belem-EN.pdf",
  es: "./public/Guia-de-Belem-ES.pdf",
};

function GuiaCOP30({ lang }) {
  return (
    <section id="cop30" className="GuiaCOP30">
      <h5>COP 30</h5>
      <h2>{translations[lang].cop30_titulo}</h2>
      <p>{translations[lang].cop30_desc1}</p>
      <p>{translations[lang].cop30_desc2}</p>
      <div className="guiaCop-conteudo">
        <div className="descricao">
          <img className="mascoteGuia" src={ImgGuiaCOP} alt="" />
          <p>{translations[lang].cop30_guia}</p>
          <p>{translations[lang].cop30_evento}</p>
          <p>{translations[lang].cop30_brasil}</p>
        </div>

        <div className="pdf">
          <a
            href={pdfs[lang]}
            download={`Guia-de-Belem-${lang.toUpperCase()}.pdf`}
          >
            <img src={ImgPDF} alt="PDF" />
          </a>
          <a
            className="baixarGuia"
            href={pdfs[lang]}
            download={`Guia-de-Belem-${lang.toUpperCase()}.pdf`}
          >
            <img src={IconDownload} alt="Download" />
            {translations[lang].cop30_btn}
          </a>
        </div>

      </div>
    </section>
  );
}

export default GuiaCOP30;
