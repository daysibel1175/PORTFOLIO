import { Box, Container, Grid, Typography, styled} from "@mui/material"
import avatar from "../../../assets/images/avatar.svg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../src/components/AnimatedBackground/AnimatedBackground";
const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up('xs')]: { // <= mobile
          paddingTop: "100px",

      },
      [theme.breakpoints.up('md')]: { // >=mobile
          paddingTop: "0",
      }
  }))

  const StyledImg = styled("img")(() => ({
      width: "75%"
  }))

  return (
      <>
          <StyledHero>
              <Container maxWidth="lg">
                  <Grid container spacing={2} pb={10}>
                      <Grid item xs={12} md={5}>
                          <Box position="relative">
                              <Box position="absolute" width={"120%"} top={-100} right={0}>
                                  <AnimatedBackground />
                              </Box>
                              <Box position="relative" textAlign="center">
                                  <StyledImg src={avatar} />
                              </Box>
                          </Box>
                      </Grid>
                      <Grid item xs={12} md={7}>
                          <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Daysibel Cotiz</Typography>
                          <Typography color="primary.contrastText" variant="h2" textAlign="center" >I'm a FullStack Developer</Typography>
                          <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                              <a href='../../../../public/CV/CV-DAYSIBEL-COTIZ-BR-DESENVOLVIMENTO-WEB.pdf' download>
                                  <StyledButton>
                                      <FileDownloadIcon />
                                      <Typography>
                                          Download CV
                                      </Typography>
                                  </StyledButton>
                                  </a>
                              </Grid>
                              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                              <a href="mailto:daysicotiz2@gmail.com?subject=I%20have%20work%20for%20you&body=You%20are%20hired">
                                  <StyledButton>
                                      <EmailIcon />
                                      <Typography>
                                          Contact me
                                      </Typography>
                                  </StyledButton>
                                  </a>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
              </Container>
          </StyledHero>
      </>
  )
}

export default Hero