import { Typography, styled, Container } from "@mui/material";
import dayflix from '../../../assets/images/dayflix.png';
import projetoexito from '../../../assets/images/cursoexito.png';
import dvsolutions from '../../../assets/images/dvsolutions.png';
import cafeGourmet from "../../../assets/images/cafeGourmet.jpeg";
import codepay from "../../../assets/images/codepay.jpeg";
import trilhasBrasil from "../../../assets/images/trilhasBrasil.jpeg"
import Cards from "../../../components/cards/Cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import '../../../assets/styles/swiper.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const Works = () => {

  const StyledWork = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "start",
    justifyContent:'center',
    padding:'0 2rem ',
    [theme.breakpoints.up("xs")]: {
     
      padding: "10px",
    },
    [theme.breakpoints.up("md")]: {
     
      padding: "0",
     
    },
  }));
  return (
    <>
    <StyledWork>
      <Container maxWidth="lg" id="projects" sx={{ height: '100%' }}>
      <Typography color="primary.contrastText" variant="h1" textAlign="center" pt={0}>Projects</Typography>
      <Swiper
  modules={[Navigation, Pagination, A11y, Autoplay]}
   autoplay={{
    delay: 3000, 
    disableOnInteraction: false, 
  }}

  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 1,
    }
  }}
  spaceBetween={10}
  pagination={{ clickable: true }}
  navigation
  
>
  <SwiperSlide>
                <Cards
                title="Café Gourmet"
                description="TS, React, MUI, Swiper"
                imageUrl={cafeGourmet}
                repoLink="https://github.com/tu-usuario/tu-repositorio"
                deployLink="https://tu-implementacion.netlify.app"
              />
              </SwiperSlide>  
      <SwiperSlide> 
         <Cards 
                title="DVSolutions"
                description="React, Material MUI, CSS, Typescrypt, Swiper"
                imageUrl={dvsolutions}
                repoLink="https://github.com/daysibel1175/DVSolutions"
                deployLink="https://dv-solutions-iota.vercel.app/"
              />
              </SwiperSlide>
      <SwiperSlide> <Cards
                title="Curso Exito"
                description="HTML, CSS, JS, Swiper, Bootstrap"
                imageUrl={projetoexito}
                repoLink="https://github.com/daysibel1175/ProjetoExito"
                deployLink="https://projeto-exito.vercel.app/"
              /></SwiperSlide>
      <SwiperSlide> <Cards
                title="Dayflix"
                description="HML, CSS, JS, Bootstrap"
                imageUrl={dayflix}
                repoLink="https://github.com/daysibel1175/DAYFLIX"
                deployLink="https://dayflix-seven.vercel.app/"
              /></SwiperSlide>
      <SwiperSlide><Cards
                title="API TRILHAS BRASIL"
                description="JS, Mongoose"
                imageUrl={trilhasBrasil}
                repoLink="https://github.com/daysibel1175/API-REST-CRUD-1.1"
                deployLink="https://tu-implementacion.netlify.app"
              />
              </SwiperSlide>
              
              <SwiperSlide>
                <Cards
                title="Codepay"
                description=""
                imageUrl={codepay}
                repoLink="https://github.com/tu-usuario/tu-repositorio"
                deployLink="https://tu-implementacion.netlify.app"
              />
              </SwiperSlide>            
    </Swiper>
      </Container>
   </StyledWork>
  </>
  );
};


export default Works;
