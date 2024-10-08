// Card.js (componente de tarjeta reutilizable)
import Card from '@mui/material/Card';
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
    width:"21.875rem",
    maxWidth:"100%",
    height:"21rem",
    maxHeight:"100%",
    padding:"2px",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      width:"21.875rem",
      height:"21rem",
    },
    [theme.breakpoints.up("md")]: {
      // >= mobile
    
    },
  }));

  return (
    <div>
  <StyledCard>
        <CardMedia
        component="img"
        alt={title}
        height="170"
        image={imageUrl}
        style={{ maxWidth: '100%', borderBottom: 'solid 1px gray', objectFit:'cover'}}
      />
      <CardContent  translate="no">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> <a href={repoLink} target="_blank" rel="noopener noreferrer">
          Repositorio
        </a></Button>
        <Button size="small">  <a href={deployLink} target="_blank" rel="noopener noreferrer">
          Implementa
        </a></Button>
      </CardActions>
     
  </StyledCard>
    
       
    
    </div>
  );
};

export default Cards;
