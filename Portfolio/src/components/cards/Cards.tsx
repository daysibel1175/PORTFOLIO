// Card.js (componente de tarjeta reutilizable)
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, styled} from "@mui/material";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    repoLink: string;
    deployLink: string;
  }
  
const Cards : React.FC<CardProps> = ({ title, description, imageUrl, deployLink, repoLink }) => {

 const StyledCard = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  width: "85%",
  maxWidth: "100%", 
  minHeight: "350px",
  height: "90%",
  maxHeight:"100%",
  padding: "0rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",  
    boxSizing: "border-box",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    padding: "0",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
    padding: "0",
  },

}));

  return (
    
  <StyledCard>
        <CardMedia
  component="img"
  alt={title}
  image={imageUrl}
  style={{
    width: '100%',
    height: '60%',
    objectFit:"fill",
    borderBottom: 'solid 1px gray',
  }}
/>
      <CardContent  
      translate="no"
      style={{
    width: '100%',
    height: '25%',
    padding: '0.5rem 1rem',
  }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions
      style={{
    height: '5%',
   
  }}
      >
        <Button size="small"> <a href={repoLink} target="_blank" rel="noopener noreferrer">
          Repositorio
        </a></Button>
        <Button size="small">  <a href={deployLink} target="_blank" rel="noopener noreferrer">
          Implementa
        </a></Button>
      </CardActions>
     
  </StyledCard>
    
       
    
  
  );
};

export default Cards;
