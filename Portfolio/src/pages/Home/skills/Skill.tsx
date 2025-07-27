import { Container, Grid, Typography, styled } from "@mui/material"
import StyledButton from "../../../components/StyledButton/StyledButton"

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor:theme.palette.primary.contrastText,
  
display:"flex",

  [theme.breakpoints.up('xs')]: { // <= mobile
      paddingTop: "10px",
      height: "auto",
  },
  [theme.breakpoints.up('md')]: { // >=mobile
      paddingTop: "0",
      height: "auto",
  }
}))

const Skill = () => {

    return (
      <StyledSkills>
        <Container maxWidth="lg" translate="no" id="skills">
        <Typography color="primary.main" variant="h1" textAlign="center" pt={6}>Skills</Typography>

  <Grid container spacing={2} pt={6} pb={4}>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton >
        <Typography color="primary.main" variant="h6" textAlign="center">
         HTML
        </Typography>
      </StyledButton>
    </Grid>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
         CSS
        </Typography>
      </StyledButton>
    </Grid>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
         Javascript 
        </Typography>
      </StyledButton>
    </Grid>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
         MongoDB 
        </Typography>
      </StyledButton>
    </Grid>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
         SQLite
        </Typography>
      </StyledButton>
    </Grid>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
         Typescript
        </Typography>
      </StyledButton>
    </Grid>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
         Bootstrap 
        </Typography>
      </StyledButton>
    </Grid>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
         React JS 
        </Typography>
      </StyledButton>
    </Grid>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
         NodeJs
        </Typography>
      </StyledButton>
    </Grid>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
        Git
        </Typography>
      </StyledButton>
    </Grid>
    <Grid
      display="flex"
      justifyContent="center"
      size={{
        xs: 4,
        md: 2
      }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
        Python
        </Typography>
      </StyledButton>
    </Grid>
     <Grid
       display="flex"
       justifyContent="center"
       size={{
         xs: 4,
         md: 2
       }}>
      <StyledButton>
        <Typography  color="primary.main" variant="h6" textAlign="center">
         Tailwind
        </Typography>
      </StyledButton>
    </Grid>
  </Grid>
  </Container>
      </StyledSkills>
    );
  }
  
  export default Skill