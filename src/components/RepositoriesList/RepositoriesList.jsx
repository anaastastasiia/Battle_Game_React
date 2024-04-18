import { useContext } from 'react';

import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import CardItem from '../CardItem';
import RepositoriesContext from '../contexts/RepositoriesContext';

import './styles.scss';

const RepositoriesList = () => {
    const {value, items} = useContext(RepositoriesContext);

    return <>
        {(items && items.length) ? <div className="cartsWrapper">
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                  <Grid container justifyContent="center" spacing={2}>
                        {items.map((i, index) => (
                            <CardItem img={i.owner.avatar_url} title={i.name} description={i.description} key={index} id={i.id}/>
                        ))}
                  </Grid>
                </Grid>
            </Grid>
        </div> : 
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="info">
                <div className='infoWrapper'>
                    Pepositories for<b>{value}</b>not found 
                    <SentimentVeryDissatisfiedIcon />
                </div>
            </Alert>
        </Stack>
        }
    </>
}

export default RepositoriesList;