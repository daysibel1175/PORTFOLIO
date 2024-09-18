import { Container, Grid, Typography, styled } from "@mui/material"
import StyledButton from "../../../components/StyledButton/StyledButton"

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor:theme.palette.primary.contrastText,
  height: "50vh",
display:"flex",

  [theme.breakpoints.up('xs')]: { // <= mobile
      paddingTop: "10px",

  },
  [theme.breakpoints.up('md')]: { // >=mobile
      paddingTop: "0",
  }
}))

const Skill = () => {

    return (
      <StyledSkills>
      <Container maxWidth="lg" translate="no">
      <Typography color="primary.main" variant="h1" textAlign="center" pt={6}>Skills</Typography>

<Grid container spacing={2} pt={6} pb={4}>
  <Grid item xs={4} md={3} display="flex" justifyContent="center">
    <StyledButton >
      <Typography color="primary.main" variant="h6" textAlign="center">
       HTML
      </Typography>
    </StyledButton>
  </Grid>
  <Grid item xs={4} md={3} display="flex" justifyContent="center">
    <StyledButton>
      <Typography  color="primary.main" variant="h6" textAlign="center">
       CSS
      </Typography>
    </StyledButton>
  </Grid>
  <Grid item xs={4} md={3} display="flex" justifyContent="center">
    <StyledButton>
      <Typography  color="primary.main" variant="h6" textAlign="center">
       Javascript 
      </Typography>
    </StyledButton>
  </Grid>
  <Grid item xs={4} md={3} display="flex" justifyContent="center">
    <StyledButton>
      <Typography  color="primary.main" variant="h6" textAlign="center">
       MongoDB 
      </Typography>
    </StyledButton>
  </Grid>
  <Grid item xs={4} md={3} display="flex" justifyContent="center">
    <StyledButton>
      <Typography  color="primary.main" variant="h6" textAlign="center">
       SQLite
      </Typography>
    </StyledButton>
  </Grid>
  <Grid item xs={4} md={3} display="flex" justifyContent="center">
    <StyledButton>
      <Typography  color="primary.main" variant="h6" textAlign="center">
       Typescript
      </Typography>
    </StyledButton>
  </Grid>
  <Grid item xs={4} md={3} display="flex" justifyContent="center">
    <StyledButton>
      <Typography  color="primary.main" variant="h6" textAlign="center">
       Bootstrap 
      </Typography>
    </StyledButton>
  </Grid>
  <Grid item xs={4} md={3} display="flex" justifyContent="center">
    <StyledButton>
      <Typography  color="primary.main" variant="h6" textAlign="center">
       NodeJs
      </Typography>
    </StyledButton>
  </Grid>
</Grid>
</Container>
      </StyledSkills>
    )
  }
  
  export default Skill