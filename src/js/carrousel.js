import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // estilos básicos
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import "../styles/SobreNos.css";

<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={20}
  slidesPerView={5}
   loop={true} 
  pagination={{ clickable: true }}
  navigation={{ clickable: true }}

></Swiper>


 function setLanguage(lang) {
      document.querySelectorAll("[data-pt]").forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
      });
    }

    // idioma padrão
    setLanguage("pt");