import {useContext, useEffect, useState} from 'react';
import UsersContext from "../contexts/UserContext";
import './styles.css';

const Player = ({number, onSubmit, userInfo, showUser, onReset, showError, userRepo}) => {
    const {setUsername, showButtonBattle} = useContext(UsersContext);
    const [stars, setStars] = useState(0);
    const [total, setTotal] = useState(0);
    const [showResetForm, setShowResetForm] = useState(0);

    useEffect(() => {
        setStars(userRepo.map(i => i.stargazers_count).reduce((accumulator, currentValue) => accumulator + currentValue, 0));
        setTotal(stars + userInfo.followers);
        setShowResetForm(true);
    }, []);

    const onChange = (e) => {
        setUsername(e.target.value);
    }
  
    return <> 
        {showUser ?
            <div className='playerWrapper'>
                <img src={userInfo.avatar_url} width={"200px"} height={"200px"}/>
                <b style={{margin: "10px"}}>@{userInfo.login}</b>
                {showButtonBattle ? 
                    <div>
                        <div>Followers: {userInfo.followers}</div>
                        <div>Repositories stars: {stars}</div>
                        <div>Total score: {total}</div>
                    </div> : 
                    <button onClick={onReset}>Reset</button>}
                
            </div> :
            <form className="playerWrapper" onSubmit={onSubmit}>
                <label>Choose <b>Player {number}</b> username</label>
                <div style={{marginBottom: '10px'}}>
                    <input 
                        type="text" 
                        placeholder={`Player ${number}`} 
                        style={{borderColor: showError && 'red'}} 
                        onChange={onChange}
                    />
                    {showError && <p className='error'>Username not exist</p>}
                </div>
               
                <button>Submit</button>
            </form>
        }   
    </>
}

export default Player;