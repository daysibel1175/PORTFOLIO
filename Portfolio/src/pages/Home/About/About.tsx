import { Container, Grid, Typography, styled} from "@mui/material"
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';
const About = () => {
  

        const StyledAbout = styled("div")(({ theme }) => ({
            backgroundColor: theme.palette.primary.contrastText,
            height: "80vh",
            display: "flex",
            flexDirection:"column",
            [theme.breakpoints.up('xs')]: { // <= mobile
                paddingTop: "10px",
      
            },
            [theme.breakpoints.up('md')]: { // >=mobile
                paddingTop: "0",
                height: "100vh",
            }
        }))
        const StyledCards = styled("div")(({ theme }) => ({
            backgroundColor: theme.palette.primary.contrastText,
            height: "100%",
            display: "flex",
            alignItems: "center",
            borderRadius:"12px",
            padding:"15px",
            flexDirection:"column",
            width:"100%",
            gap:"10px",
            boxShadow: "-1px 1px 0px #dcdcdc, 1px 1px 0px #dcdcdc",
            textAlign:'center'
        }))

        return (
            <>
                <StyledAbout>
                    <Container maxWidth="lg">
                    <Typography color="primary.main" variant="h1" textAlign="center" pt={4}>About Me</Typography>
                                <Grid container display="flex" gap={3} justifyContent="center" pt={3}>
                                    <Grid item xs={12} md={3} display="flex" justifyContent="center">
                                   
                              <StyledCards>
                                <MenuBookTwoToneIcon/>
                                <Typography>
                                          Education

                                      </Typography>
                                      <Typography>
                                      Pursuing a Degree in Systems Analysis and Development
                                      </Typography>
                                      </StyledCards>
</Grid>
                                      <Grid item xs={12} md={3} display="flex" justifyContent="center">
                              <StyledCards>

                             <WorkOutlineTwoToneIcon/>
                             <Typography>
                                          Experience
                                      </Typography>
                                      <Typography>
                                         Backend Develoment
                                      </Typography>
                                      <Typography>
                                       Frontend Develoment
                                      </Typography>
                                      </StyledCards>

                           
                                    </Grid>

                                </Grid>
                                <Typography variant="h6" textAlign="center" pt={3} pb={3} >
                                I'm a passionate programmer. I thrive on the thrill of solving complex problems and love to take on projects that challenge my skills and push me to learn more. Currently, I'm diving deep into the world of React, expanding my knowledge and honing my skills in this powerful library. I believe that continuous learning is the key to growth in the tech industry, and I'm always eager to explore new technologies and methodologies. Looking forward to bringing my dedication and diverse skill set to exciting new projects!
                                      </Typography>
                                      <hr />
                                   

                    </Container>
            

                </StyledAbout>
            </>
        )
      }


export default About