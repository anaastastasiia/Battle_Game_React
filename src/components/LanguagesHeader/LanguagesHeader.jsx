import { useContext } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import RepositoriesContext from '../contexts/RepositoriesContext';

const LanguagesHeader = () => {
  const {value, handleTabChange, langs} = useContext(RepositoriesContext);
  console.log('value: ', value);

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 800 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {Object.keys(langs).map((key, index) => (
          <Tab label={key} key={index} value={key}/>
        ))}
      </Tabs>
    </Box>
  );
}

export default LanguagesHeader;