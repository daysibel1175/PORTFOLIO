import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }))
              const CV = '../../assets/CV/CV-DAYSIBEL-COTIZ-BR-DESENVOLVIMENTO-WEB.pdf'
              
    return (
        <>
          <a href={CV} download>
                <StyledButton>
                    {children}
                </StyledButton>
            </a>
        </>
    )
}

export default StyledButton
  