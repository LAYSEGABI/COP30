import "../styles/SobreNos.css";

import galho from "../assets/galho.png";

import megafone from "../assets/megafone.svg";
import infraIcon from "../assets/infraIcon.svg";
import parceriasIcon from "../assets/parceriasIcon.svg";
import goverIcon from "../assets/goverIcon.svg";
import formacaoIcon from "../assets/fomacaoIcon.svg";

//Fotos
import Paula from "../assets/equipe/Paula.png";
import Messias from "../assets/equipe/messias.jpeg";
import Mackenzie from "../assets/equipe/Mackenzie.png";
import Laura from "../assets/equipe/Laura.png";
import Erick from "../assets/equipe/Erick.jpeg";
import Kauan from "../assets/equipe/Kauan.png";
import Vinicius from "../assets/equipe/Vinicius.png";
import Layse from "../assets/equipe/Layse.png";
import Debora from "../assets/equipe/Debora.png";
import Giovanni from "../assets/equipe/Giovanni.png";
import Bianca from "../assets/equipe/Bianca.png";
import Thais from "../assets/equipe/Thais.png";
import Ana from "../assets/equipe/Ana.png";
import Camila from "../assets/equipe/Camila.png";
import Joao from "../assets/equipe/Joao.png";
import Beatriz from "../assets/equipe/Beatriz.png";
import Ruan from "../assets/equipe/Ruan.png";
import Aida from "../assets/equipe/Aida.png";
import Rafis from "../assets/equipe/Rafis.png";
import Suellen from "../assets/equipe/Suellen.png";
import Natalia from "../assets/equipe/Natalia.png";
import Ghabryel from "../assets/equipe/Ghabryel.png";
import Julia from "../assets/equipe/Julia.png";
import Gabryela from "../assets/equipe/Gabryela.png";
import Luis from "../assets/equipe/Luis.png";

import { Swiper, SwiperSlide } from "swiper/react";
import translations from "../lang/translations";

import linkedin from "../assets/linkedin.svg";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function SobreNos({ lang }) {
  return (
    <section id="sobre-nos" className="sobre-nos">
      <div className="container">
        <div className="nosso-proposito">
          <div className="nosso-proposito-conteudo">
            <h5>{translations[lang].sobre}</h5>
            <h2>{translations[lang].sobre_titulo}</h2>
            <p>{translations[lang].sobre_desc}</p>
            <p>{translations[lang].sobre_futuro}</p>
          </div>
          <img src={galho} alt="" />
        </div>
        <div className="nossa-estrutura">
          <h2>{translations[lang].sobre_estrutura}</h2>
          <div className="nossa-estrutura-conteudo">
            <div className="card">
              <h4>{translations[lang].sobre_comunicacao}</h4>
              <img src={megafone} alt="" />
              <p>{translations[lang].sobre_comunicacao_desc}</p>
            </div>
            <div className="card">
              <h4>{translations[lang].sobre_infra}</h4>
              <img src={infraIcon} alt="" />
              <p>{translations[lang].sobre_infra_desc}</p>
            </div>{" "}
            <div className="card">
              <h4>{translations[lang].sobre_parcerias}</h4>
              <img src={parceriasIcon} alt="" />
              <p>{translations[lang].sobre_parcerias_desc}</p>
            </div>{" "}
            <div className="card">
              <h4>{translations[lang].sobre_governanca}</h4>
              <img src={goverIcon} alt="" />
              <p>{translations[lang].sobre_governanca_desc} </p>
            </div>{" "}
            <div className="card">
              <h4>{translations[lang].sobre_formacao}</h4>
              <img src={formacaoIcon} alt="" />
              <p>{translations[lang].sobre_formacao_desc}</p>
            </div>
          </div>
        </div>
        <div className="frase">
          <p>{translations[lang].frase_1}</p>
          <p>{translations[lang].frase_2}</p>
          <p>{translations[lang].frase_3}</p>
        </div>

        <div className="time">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0} // espaçamento entre slides
            loop={true}
            slidesPerView="auto"
            navigation={{ clickable: true }} // setas de navegação
            breakpoints={{
              60: {
                spaceBetween: 20, // quando a tela for >= 768px
              },
            }}
          >
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={Laura} alt="" />
                  <a
                    href="https://www.linkedin.com/in/laura-galvao-bio/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Laura Galvão</h4>
                <p>{translations[lang].equipe_comunicacao}</p>
                <h5>HUB São Paulo 2</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Layse}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>{translations[lang].equipe_comunicacao}</p>
                <h5>HUB Florianopolis</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={Mackenzie} alt="" />
                  <a
                    href="https://www.linkedin.com/in/mackenziekuenz/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Mackenzie Kuenz</h4>
                <p>{translations[lang].equipe_comunicacao}</p>
                <h5>HUB Vancouver</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Debora}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/deboramori/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Débora Mori</h4>
                <p>{translations[lang].equipe_infraestrutura}</p>
                <h5>HUB Curitiba</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Giovanni}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/giovannistefanoramos/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Giovanni Ramos</h4>
                <p>{translations[lang].equipe_formacao}</p>
                <h5>HUB Ribeirão P.</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={Paula} alt="" />
                  <a
                    href="https://www.linkedin.com/in/paulansanches/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Paula Sanches</h4>
                <p>{translations[lang].equipe_comunicacao}</p>
                <h5>HUB Ribeirão P.</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Bianca}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/biancadossantossilva/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Bianca Silva</h4>
                <p>{translations[lang].equipe_comunicacao}</p>
                <h5>HUB Fortaleza</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={Erick} alt="" />
                  <a
                    href="https://www.linkedin.com/in/erick-lucius-a0aa3a2a3/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Erick Lucius</h4>
                <p>{translations[lang].equipe_comunicacao}</p>
                <h5>HUB Uberlândia</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Thais}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/thais-cristina-m/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Thais Alves</h4>
                <p>{translations[lang].equipe_comunicacao}</p>
                <h5>HUB São Paulo 2</h5>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Ana}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/anafabian/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Ana Elaine</h4>
                <p>{translations[lang].equipe_comunicacao}</p>
                <h5>HUB Fortaleza</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Camila}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/camila-costa-moreira-627623180/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Camila Costa</h4>
                <p>{translations[lang].equipe_formacao}</p>
                <h5>HUB Uberlândia</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={Messias} alt="" />
                  <a
                    href="https://www.linkedin.com/in/messiasnns/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Messias Nunes</h4>
                <p>{translations[lang].equipe_comunicacao}</p>
                <h5>HUB Recife</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Rafis}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/rafismartins/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Rafis Martins</h4>
                <p>{translations[lang].equipe_formacao}</p>
                <h5>HUB São Paulo 1</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Suellen}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/suellen-kristal-7371b3102/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Suellen Kristal</h4>
                <p>{translations[lang].equipe_formacao}</p>
                <h5>HUB São Paulo 2</h5>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="" alt="" />
                  <a href="" target="_blank">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Leticia Pereira</h4>
                <p>{translations[lang].equipe_formacao}</p>
                <h5>HUB São Paulo 2</h5>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Gabryela}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/gabryellacmendon%C3%A7a/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Gabryella Cerri</h4>
                <p>{translations[lang].equipe_formacao}</p>
                <h5>HUB Ribeirão P.</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Luis}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/luizfelipecserigheli/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Luiz Serigheli</h4>
                <p>{translations[lang].equipe_formacao}</p>
                <h5>HUB Florianópolis</h5>
              </div>
            </SwiperSlide>
            {/*<SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="" alt="" />
                  <a href="" target="_blank">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Beatriz Brito</h4>
                <p>{translations[lang].equipe_formacao}</p>
                <h5>HUB São Paulo 1</h5>
              </div>
            </SwiperSlide>*/}
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Julia}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/juliatelescaetano/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Julia Caetano</h4>
                <p>Parcerias</p>
                <h5>HUB São Paulo 1</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Ghabryel}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/ghabryelhenrique/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Ghabryel Henrique</h4>
                <p>Parcerias</p>
                <h5>HUB Uberlândia</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Natalia}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/ghabryelhenrique/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Natalia Tsuyama</h4>
                <p>Parcerias</p>
                <h5>HUB Belo Horizonte</h5>
              </div>
            </SwiperSlide>
            {/*<SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="" alt="" />
                  <a href="" target="_blank">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Milena Assunção</h4>
                <p>Parcerias</p>
                <h5>HUB Campinas</h5>
              </div>
            </SwiperSlide>*/}
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Vinicius}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/vinilag/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Vinicius Laguardia</h4>
                <p>Parcerias</p>
                <h5>HUB São Paulo 2</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Aida}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/a%C3%ADda-lins-829b69159/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Aída Lins</h4>
                <p>{translations[lang].equipe_formacao}</p>
                <h5>HUB Manaus</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Ruan}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/ruan-roberto-a11534321/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Ruan Roberto</h4>
                <p>{translations[lang].equipe_formacao}</p>
                <h5>HUB Manaus</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Beatriz}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/beatriz-miloca/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Beatriz Miloca</h4>
                <p>Parcerias</p>
                <h5>HUB Osasco</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Joao}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/ojoaopedrorocha/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>João Pedro</h4>
                <p>Parcerias</p>
                <h5>HUB Rio de Janeiro</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src={Kauan} alt="" />
                  <a
                    href="https://www.linkedin.com/in/kaurodri/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Kauan Barros</h4>
                <p>Comunicação</p>
                <h5>HUB Uberlândia</h5>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SobreNos;
