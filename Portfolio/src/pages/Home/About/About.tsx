import { Container, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Grid"; 
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
   
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("xs")]: {
      height: "auto",
      paddingTop: "10px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
      height: "auto",
    },
  }));

  const StyledCards = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    height: "100%",
    display: "flex",
    alignItems: "center",
    borderRadius: "12px",
    padding: "15px",
    flexDirection: "column",
    width: "100%",
    gap: "10px",
    boxShadow: "-1px 1px 0px #dcdcdc, 1px 1px 0px #dcdcdc",
    textAlign: "center",
  }));

  return (
    <StyledAbout>
      <Container maxWidth="lg" id="about">
        <Typography color="primary.main" variant="h1" textAlign="center" pt={4}>
          {t("about.title")}
        </Typography>

        <Grid container spacing={3} sx={{ pt: 3 }} justifyContent="center">
          <Grid size={{ xs: 12, md: 3 }} sx={{ display: "flex", justifyContent: "center" }}>
            <StyledCards>
              <MenuBookTwoToneIcon />
              <Typography>{t("about.education.label")}</Typography>
              <Typography>{t("about.education.description")}</Typography>
            </StyledCards>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }} sx={{ display: "flex", justifyContent: "center" }}>
            <StyledCards>
              <WorkOutlineTwoToneIcon />
              <Typography>{t("about.experience.label")}</Typography>
              <Typography>{t("about.experience.description")}</Typography>
            </StyledCards>
          </Grid>
        </Grid>

        <Typography variant="h6" textAlign="center" pt={3} pb={3}>
          {t("about.description")}
        </Typography>

        <hr />
      </Container>
    </StyledAbout>
  );
};

export default About;