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
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4E03AQHWTMpvEXRtHg/profile-displayphoto-shrink_200_200/B4EZcYMS52HYAg-/0/1748457567350?e=1759968000&v=beta&t=yipEEERklE-MDD7IP7QF4Mc7qclDjrAqB2HtXTuP_8o"
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/laura-galvao-bio/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Laura Galvão</h4>
                <p>Comunicação</p>
                <h5>HUB São Paulo 2</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQH7-dnJdXUwdQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718629670668?e=1759968000&v=beta&t=5Cnv6U-ewH_kIfn0cSwUogbnUoHWG9gnW-UAEwjxaZk"
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
                <p>Comunicação</p>
                <h5>HUB Florianopolis</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D5603AQE0Z7O7JtZKhw/profile-displayphoto-shrink_400_400/B56ZUC9jzKHQAg-/0/1739511447175?e=1760572800&v=beta&t=NrCu7lhFCEadESG4MYnlFPyeaBswdWWJg7K21YXSS-s"
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/mackenziekuenz/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Mackenzie Kuenz</h4>
                <p>Comunicação</p>
                <h5>HUB Vancouver</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4E03AQHMsvEFREYuaQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729530831985?e=1759968000&v=beta&t=_2UtdhPIue1aeZB_PlCbaRxQ41U4-LEm74Ra66QyBvY"
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
                <p>Infraestrutura</p>
                <h5>HUB Curitiba</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEs-3O7mmgSJg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731936136609?e=1759968000&v=beta&t=RsFUKbVi1LqhP9N-7yzwXAiEfHIiJFpOpb5Y5tLLHCo"
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
                <p>Comunicação</p>
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
                <p>Comunicação</p>
                <h5>HUB Ribeirão P.</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHydQkF6fbvfQ/profile-displayphoto-shrink_200_200/B4DZWmMeGJHkAc-/0/1742250042311?e=1759968000&v=beta&t=pUIrfl8GjC0Ng4lb4Z92JQMAy9M6au5kQa0tTCil0-o"
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
                <p>Comunicação</p>
                <h5>HUB Fortaleza</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQH20vD2mOzf8Q/profile-displayphoto-scale_200_200/B4DZirQl61GgAY-/0/1755219911571?e=1759968000&v=beta&t=vfcjMCLvHb-Rw_MKf0snTloOGJQE9A1ryP57oFa_IGo"
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/erick-lucius-a0aa3a2a3/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Erick Lucius</h4>
                <p>Comunicação</p>
                <h5>HUB Uberlândia</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHOvlS4b63AZA/profile-displayphoto-shrink_200_200/B4DZZETZG2HIAY-/0/1744902657347?e=1759968000&v=beta&t=ojZKdrVqsmc8r9OAk78ollOKebugMu4gyOyqFkrZDx8"
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
                <p>Comunicação</p>
                <h5>HUB São Paulo 2</h5>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGi2dE9LJnd2g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725883150554?e=1760572800&v=beta&t=26rNG1ZV2eYPoNVLpt3G0XLZj06cwvet_S3WkPXhmEI"
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
                <p>Comunicação</p>
                <h5>HUB Fortaleza</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/C4D03AQGZjLf05EOAtQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1597440565632?e=1760572800&v=beta&t=ZL4zO90CIRY6e2lhOqLpMFgPzj0brB_aGuXNxxiFPjE"
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
                <p>Formações</p>
                <h5>HUB Uberlândia</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src={Messias}
                    alt=""
                  />
                  <a
                    href="https://www.linkedin.com/in/messiasnns/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Messias Nunes</h4>
                <p>Comunicação</p>
                <h5>HUB Recife</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFGV17SXxTdqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698764018142?e=1760572800&v=beta&t=hfhxgX-ks7-acunnPEWlbnx8_zF7df-HLfjgzWyB7gI"
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
                <p>Formações</p>
                <h5>HUB São Paulo 1</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHIYdDLoaWL4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719280826345?e=1760572800&v=beta&t=KR_1YnpeeZscQiS8lU_mletLiHY3AzqskN42uDTu388"
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
                <p>Formações</p>
                <h5>HUB São Paulo 2</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="" alt="" />
                  <a href="" target="_blank">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Leticia Pereira</h4>
                <p>Formações</p>
                <h5>HUB São Paulo 2</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQF3YPSP8-csyw/profile-displayphoto-shrink_200_200/B4DZZ8kLnfG4AY-/0/1745846583428?e=1760572800&v=beta&t=RnuGbpcOwBUua5yO0mrFO6MamX5OXhVUDnupmlvF3q4"
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
                <p>Formações</p>
                <h5>HUB Ribeirão P.</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEUKH9AO6BvsQ/profile-displayphoto-scale_200_200/B4DZiz6IKHHwAY-/0/1755365021773?e=1760572800&v=beta&t=cue8EFeeR0CiVtP-l-sHCRdVToV-T5cDgBG46uMzH9I"
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
                <p>Formações</p>
                <h5>HUB Florianópolis</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img className="foto-perfil" src="" alt="" />
                  <a href="" target="_blank">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <h4>Beatriz Brito</h4>
                <p>Formações</p>
                <h5>HUB São Paulo 1</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4E03AQFLo__YleZcFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728924718902?e=1760572800&v=beta&t=c36Ai5_cOo00BZ1phXWyPfP6IGieE9onjUlgh_Yi0OA"
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
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFxStBSHYLvpw/profile-displayphoto-shrink_200_200/B4DZdqwAwqGYAg-/0/1749842662659?e=1760572800&v=beta&t=d0jcXIxxUUPFTnC36soVGZGiCiv7-_bgLHXc66t5dR8"
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
                    src="https://media.licdn.com/dms/image/v2/D4E03AQFO5P8RkzqtTg/profile-displayphoto-scale_200_200/B4EZgYoMPuHIAg-/0/1752759851906?e=1760572800&v=beta&t=9erLTw8t0IdiB3446HdLfZpCnPWu1M5r_zzmoOcPjr0"
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
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGv-RWl5jiN3A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691160270582?e=1760572800&v=beta&t=d77wP52_L7xNAhY3D0S_zNQMEulra9KVlgsNwDEuGhI"
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
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHdfDByK8PjuA/profile-displayphoto-scale_200_200/B4DZg8ZmvHHsAY-/0/1753360003697?e=1760572800&v=beta&t=zIhFyYFoGnxyw4TdEDXGmC-8MQ0MnjSYTIDVPtyxPvU"
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
                <p>Formações</p>
                <h5>HUB Manaus</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D5603AQFCNXlhXqnEHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730118135732?e=1760572800&v=beta&t=csLQ-3zMg-5YHR53yR682WjlmCGjPbjdnV8PPdnbyI4"
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
                <p>Formações</p>
                <h5>HUB Manaus</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-equipe">
                <div className="perfil">
                  <img
                    className="foto-perfil"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQG9mDyn07Dutw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695227112324?e=1760572800&v=beta&t=nhpG-badOXLuqA_thq1AG1kDd6z18xnfVEu6lZHZ04s"
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
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEODoyN_l067g/profile-displayphoto-scale_200_200/B4DZjSqCBeGgAc-/0/1755880891185?e=1760572800&v=beta&t=0Ob6QI9xiH3aSChsrTbd1bLyp7mmnUT8SUH2xFYtqPM"
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
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SobreNos;
