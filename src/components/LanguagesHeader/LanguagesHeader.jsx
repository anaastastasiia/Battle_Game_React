import { useState, useEffect } from "react";
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const LanguagesHeader = () => {
  const [langs, setLangs] = useState({});
  const [value, setValue] = useState(0); 

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://api.github.com/repos/microsoft/vscode/languages`);
      setLangs(data);
    })();
  }, []);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tab label={key} key={index} />
        ))}
      </Tabs>
    </Box>
  );
}

export default LanguagesHeader;