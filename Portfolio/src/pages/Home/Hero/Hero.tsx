import {Button, Container, Grid, Typography, styled} from "@mui/material"
import avatar from "../../../assets/images/avatar.svg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
   const StyledHero = styled("div")(() => ({
backgroundColor: "black",
height:'100vh'
   }))
   const StyledImg = styled("img")(() => ({
  width: '100%',
    borderRadius:'50%'
       }))

    return (
      <>
      <StyledHero>
        <Container maxWidth="lg">
        <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
  <StyledImg src={avatar}/>
  </Grid>
  <Grid item xs={12} md={8}>
<Typography color='primary' variant="h1" textAlign="center">
    Daysibel Cotiz
</Typography>
<Typography color='primary' variant="h2" textAlign="center">
    I'm a Developer FullStack
</Typography>
<Grid container display='flex' justifyContent='center'>
<Grid item xs={12} md={4} display='flex' justifyContent='center'>
<Button>
    <FileDownloadIcon/>
    Download CV</Button>
</Grid>
<Grid item xs={12} md={4} display='flex' justifyContent='center'>
<Button>
    <EmailIcon/>
    Contact me</Button>
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