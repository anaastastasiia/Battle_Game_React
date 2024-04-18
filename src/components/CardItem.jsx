import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import RepositoriesContext from '../components/contexts/RepositoriesContext';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';

const CardItem = ({img, title, description, id}) => {
  const navigate = useNavigate();
  const {isLoading} = useContext(RepositoriesContext);
  console.log(isLoading);

  const onClickDetails = () =>{
    console.log("onClickDetails id: ", id);
    navigate(`/repository/${id}`);
  }

  return <>
      <Card sx={{ maxWidth: 220, minWidth: 220, margin: '5px' }}>
        {isLoading ? <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" /> :
          <CardMedia
            sx={{ height: 140 }}
            image={img}
            title={title}
          />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {isLoading ? <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            /> : title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isLoading ? <div>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" /></div> : 
            description}
          </Typography>
        </CardContent>
        <CardActions>
          {!isLoading && <Button onClick={onClickDetails}>Learn More</Button>}
        </CardActions>
      </Card>
  </>
}

export default CardItem;