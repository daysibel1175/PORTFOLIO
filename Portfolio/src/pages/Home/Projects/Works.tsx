import { Typography, styled, Container } from "@mui/material";
import dayflix from '../../../assets/images/dayflix.png'
import projetoexito from '../../../assets/images/cursoexito.png'
import dvsolutions from '../../../assets/images/dvsolutions.png'
import Cards from "../../../components/cards/Cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
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
    padding:'0 3rem ',
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "10px",
    },
    [theme.breakpoints.up("md")]: {
      // >= mobile
      paddingTop: "0",
      height: "100vh",
    },
  }));
  return (
    <>
    <StyledWork>
      <Container maxWidth="lg">
      <Typography color="primary.contrastText" variant="h1" textAlign="center" pt={6}>Projects</Typography>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ maxWidth: '100%', padding:'1rem 3rem', height:"70vh"}}
      navigation
      pagination={{ clickable: true }}
    >
      
      <SwiperSlide > 
         <Cards 
                title="DVSolutions"
                description="React, Material MUI, CSS, Typescrypt, Swipetr"
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
                imageUrl="/static/images/cards/contemplative-reptile.jpg"
                repoLink="https://github.com/daysibel1175/API-REST-CRUD-1.1"
                deployLink="https://tu-implementacion.netlify.app"
              />
              </SwiperSlide>
              <SwiperSlide><Cards
                title="Lizard"
                description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                imageUrl="/static/images/cards/contemplative-reptile.jpg"
                repoLink="https://github.com/tu-usuario/tu-repositorio"
                deployLink="https://tu-implementacion.netlify.app"
              />
              </SwiperSlide>  <SwiperSlide><Cards
                title="Lizard"
                description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                imageUrl="/static/images/cards/contemplative-reptile.jpg"
                repoLink="https://github.com/tu-usuario/tu-repositorio"
                deployLink="https://tu-implementacion.netlify.app"
              />
              </SwiperSlide>
              <SwiperSlide><Cards
                title="Lizard"
                description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                imageUrl="/static/images/cards/contemplative-reptile.jpg"
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
