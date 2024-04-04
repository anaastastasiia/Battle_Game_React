import {useContext} from 'react';
import Player from "../Player/Player";
import UsersContext from "../contexts/UserContext";
import './styles.css';

const Players = () => {
    const {
        firstUser, 
        secondUser, 
        findFirstUser, 
        findSecondUser,
        isShowFirstUserInfo, 
        setIsShowFirstUserInfo,
        isShowSecondUserInfo,
        setIsShowSecondUserInfo,
        showSecondError,
        showFirstError,
        onBattle,
        firstRepo,
        secondRepo
    } = useContext(UsersContext);

    const onReset = (user) => {
        if (user === 'first') {
            setIsShowFirstUserInfo(false);
        } else {
            setIsShowSecondUserInfo(false);
        }
    }

    return <>  
        <div className='wrapper'>
            <div className="playersWrapper">
                <Player 
                    number={1} 
                    onSubmit={findFirstUser} 
                    userInfo={firstUser} 
                    showUser={isShowFirstUserInfo} 
                    onReset={() => onReset('first')}
                    showError={showSecondError}
                    userRepo={firstRepo}
                />
                <Player 
                    number={2} 
                    onSubmit={findSecondUser} 
                    userInfo={secondUser} 
                    showUser={isShowSecondUserInfo}
                    onReset={() => onReset('second')}
                    showError={showFirstError}
                    userRepo={secondRepo}
                />
            </div> 
            {isShowFirstUserInfo && isShowSecondUserInfo && 
                <button onClick={onBattle}>Battle!</button>
            } 
        </div> 
    </>
}

export default Players;