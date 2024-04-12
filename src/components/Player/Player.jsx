import {useContext, useEffect, useState} from 'react';
import UsersContext from "../contexts/UserContext";
import './styles.css';

const Player = ({number, onSubmit, userInfo, showUser, onReset, showError, userRepo, setTotal, battleResult}) => {
    const {setUsername, showBattleInfo} = useContext(UsersContext);
    const [stars, setStars] = useState(0);
    const [totalScore, setTotalScore] = useState();
    const [battleLabel, setBattleLabel] = useState();

    useEffect(() => {
        setStars(userRepo.map(i => i.stargazers_count).reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    }, [userRepo]);

    useEffect(() => {
        setTotalScore(stars + userInfo.followers);
    }, [stars])

    useEffect(() => {
        setTotal(totalScore);
    }, [totalScore]);

    useEffect(() => {
        if(battleLabel) {
            setBattleLabel('')
        }
        if (battleResult === true) {
          setBattleLabel(`Winner`);
        } else if (battleResult === false) {
          setBattleLabel(`Loser`);
        }
      }, [battleResult]);

    const onChange = (e) => {
        setUsername(e.target.value);
    }
  
    return <> 
        { showUser ? <div className='playerWrapper'>
                {battleLabel ? <p >{battleLabel}</p> : null}
                <img src={userInfo.avatar_url} width={"200px"} height={"200px"}/>
                <b style={{margin: "10px"}}>@{userInfo.login}</b>
                {showBattleInfo ? 
                    <div>
                        <div>Followers: {userInfo.followers}</div>
                        {userRepo.length && 
                            <div> 
                                <div>Repositories stars: {stars}</div>
                                {totalScore ? <b>Total score: {totalScore}</b> : null}
                            </div>
                        }
                    </div> : 
                    <button onClick={onReset}>Reset</button>
                }
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
        </form> }   
    </>
}

export default Player;