import * as React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import FaceIcon from '@mui/icons-material/Face';
import Button from '@mui/material/Button';

import './styles.scss';

const Repository = ({id}) => {
  const [isLoadingRepo, setIsLoadingRepo] = useState(false);
  const [chosedElement, setChoosedElement] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoadingRepo(true);
        try {
            const { data } = await axios.get(`https://api.github.com/repositories/${id}`);
            setChoosedElement(data);
            setIsLoadingRepo(false);
        } catch (e) {
            setIsLoadingRepo(false);
            console.error("Error: ", e);
        }
  })();
  }, []);

  const goTOGitHub = () => {
    window.open(chosedElement.html_url, '_blank');
  }

  return <>
      <Card sx={{ maxWidth: 250, minWidth: 250, margin: '5px' }}>
        {isLoadingRepo ? <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" /> :
          <CardMedia
            sx={{ height: 140 }}
            image={chosedElement.owner && chosedElement.owner.avatar_url}
            title={chosedElement.name}
          />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {isLoadingRepo ? <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            /> : chosedElement.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isLoadingRepo ? <div>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" /></div> : 
            chosedElement.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isLoadingRepo ? <div>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" /></div> : 
              <div className='detailsWrapper'>
                <div className='itemWrapper'><StarIcon/> {chosedElement.stargazers_count}</div>
                <div className='itemWrapper'><PeopleIcon/> {chosedElement.subscribers_count}</div>
                <div className='itemWrapper'><FaceIcon/> {chosedElement.watchers_count}</div>
              </div>}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {!isLoadingRepo && 
              <Button variant="text" onClick={goTOGitHub}>GO TO GITHUB</Button>
            }
          </Typography>
          
        </CardContent>
      </Card>
  </>
}

export default Repository;