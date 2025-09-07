import "../styles/SobreNos.css";

import galho from "../assets/galho.png";

import megafone from "../assets/megafone.svg";
import infraIcon from "../assets/infraIcon.svg";
import parceriasIcon from "../assets/parceriasIcon.svg";
import goverIcon from "../assets/goverIcon.svg";
import formacaoIcon from "../assets/fomacaoIcon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import translations from "../lang/translations";

import linkedin from "../assets/linkedin.svg";
import perfil from "../assets/perfil.png";
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
            spaceBetween={20} // espaçamento entre slides
            loop={true}
            slidesPerView="auto"
            navigation={{ clickable: true }} // setas de navegação
          >
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="https://media.licdn.com/dms/image/v2/D4E03AQHWTMpvEXRtHg/profile-displayphoto-shrink_200_200/B4EZcYMS52HYAg-/0/1748457567350?e=1759968000&v=beta&t=yipEEERklE-MDD7IP7QF4Mc7qclDjrAqB2HtXTuP_8o" alt="" />
                  <a
                    href="https://www.linkedin.com/in/laura-galvao-bio/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Laura Galvão</h4>
                <p>Comunicação</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="https://media.licdn.com/dms/image/v2/D4D03AQH7-dnJdXUwdQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718629670668?e=1759968000&v=beta&t=5Cnv6U-ewH_kIfn0cSwUogbnUoHWG9gnW-UAEwjxaZk" alt="" />
                  <a
                    href="https://www.linkedin.com/in/layse-gabrielly-8b5406235/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Layse Gabrielly</h4>
                <p>Desenvolvedora Front-end</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
                  <a
                    href="https://www.linkedin.com/in/messiasnns/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Messias Nunes</h4>
                <p>Comunicação</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="https://media.licdn.com/dms/image/v2/D4E03AQHMsvEFREYuaQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729530831985?e=1759968000&v=beta&t=_2UtdhPIue1aeZB_PlCbaRxQ41U4-LEm74Ra66QyBvY" alt="" />
                  <a
                    href="https://www.linkedin.com/in/deboramori/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Débora Mori</h4>
                <p>Comunicação</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="https://media.licdn.com/dms/image/v2/D4D03AQEs-3O7mmgSJg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731936136609?e=1759968000&v=beta&t=RsFUKbVi1LqhP9N-7yzwXAiEfHIiJFpOpb5Y5tLLHCo" alt="" />
                  <a
                    href="https://www.linkedin.com/in/giovannistefanoramos/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Giovanni Ramos</h4>
                <p>Comunicação</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="https://media.licdn.com/dms/image/v2/D4E03AQETOQOBaiH32A/profile-displayphoto-shrink_200_200/B4EZd61CmKH0Ac-/0/1750112415026?e=1759968000&v=beta&t=YV4uDr-DtY0iIGdfh8hpEE7XmRLczhny6sIFPACXyh0" alt="" />
                  <a
                    href="https://www.linkedin.com/in/paulansanches/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Paula Sanches</h4>
                <p>Comunicação</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="https://media.licdn.com/dms/image/v2/D4D03AQHydQkF6fbvfQ/profile-displayphoto-shrink_200_200/B4DZWmMeGJHkAc-/0/1742250042311?e=1759968000&v=beta&t=pUIrfl8GjC0Ng4lb4Z92JQMAy9M6au5kQa0tTCil0-o" alt="" />
                  <a
                    href="linkedin.com/in/biancadossantossilva"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Bianca Silva</h4>
                <p>Comunicação</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="https://media.licdn.com/dms/image/v2/D4D03AQH20vD2mOzf8Q/profile-displayphoto-scale_200_200/B4DZirQl61GgAY-/0/1755219911571?e=1759968000&v=beta&t=vfcjMCLvHb-Rw_MKf0snTloOGJQE9A1ryP57oFa_IGo" alt="" />
                  <a
                    href="https://www.linkedin.com/in/erick-lucius-a0aa3a2a3/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Erick Lucius</h4>
                <p>Comunicação</p>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SobreNos;
