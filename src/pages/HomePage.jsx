import { useState, useEffect } from "react";
import axios from 'axios';
import LanguagesHeader from '../components/LanguagesHeader/LanguagesHeader';
import RepositoriesList from '../components/RepositoriesList/RepositoriesList';
import RepositoriesContext from '../components/contexts/RepositoriesContext';

const HomePage = () => {
    const [langs, setLangs] = useState({});
    const [value, setValue] = useState('TYPESCRIPT'); 
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  
    useEffect(() => {
      (async () => {
        const { data } = await axios.get(`https://api.github.com/repos/microsoft/vscode/languages`);
        setLangs(data);
      })();
    }, []);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            setValue(value);
            try {
                const { data } = await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1000+language:${value}&sort=stars&order=desc&type=Repositories`);
                setItems(data.items);
                setValue(newValue);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                console.error("Error: ", e);
            }
        })();
    }, [value]);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    return <>
        <RepositoriesContext.Provider 
            value={{
                langs, 
                value,
                handleTabChange,
                items,
                isLoading
            }}
        >
            <div style={{margin: '0 40px'}}>
                <LanguagesHeader /> 
                <RepositoriesList />
            </div>
        </RepositoriesContext.Provider> 
    </>
}
 
export default HomePage;