// Card.js (componente de tarjeta reutilizable)
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
  return (
    <div>
        <Card sx={{ maxWidth: 350, maxHeight:310}}  style={{ maxWidth: '100%', padding:'1rem'}}>
        <CardMedia
        component="img"
        alt={title}
        height="150"
        image={imageUrl}
        style={{ maxWidth: '100%'}}
      />
      <CardContent>
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
        </Card>
    
    </div>
  );
};

export default Cards;
