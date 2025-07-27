import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"
import LanguageSelector from "../LanguageSelector/LanguageSelector"
import { useTranslation } from "react-i18next"



const NavBar = () => {

    const {t} = useTranslation()
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                  <MenuItem onClick={() => scrollToSection("about")}>{t('nav.about')}</MenuItem>
                    <MenuItem onClick={() => scrollToSection("skills")}>{t('nav.skills')}</MenuItem>
                    <MenuItem onClick={() => scrollToSection("projects")}>{t('nav.projects')}</MenuItem>
                    <LanguageSelector />
                </StyledToolbar>
                
            </AppBar>
        </>
    )
}

export default NavBar