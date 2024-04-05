import {useContext} from 'react';
import Player from "../Player/Player";
import ResetButton from "../ResetButton";
import BattleButton from "../BattleButton";
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
        firstRepo,
        secondRepo,
        showResetButton,
        battleResult,
        setFirstTotal,
        setSecondTotal,
        setFirstUser,
        setShowFirstError,
        setFirstRepo,
        setSecondUser,
        setShowSecondError,
        setSecondRepo,
    } = useContext(UsersContext);

    const onReset = (user) => {
        if (user === 'first') {
            setIsShowFirstUserInfo(false);
            setFirstUser({});
            setShowFirstError(false);
            setFirstRepo([]);
            setFirstTotal();
        } else {
            setIsShowSecondUserInfo(false);
            setSecondUser({});
            setShowSecondError(false);
            setSecondRepo([]);
            setSecondTotal();
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
                    battleResult={battleResult.first}
                    setTotal={setFirstTotal}
                />
                <Player 
                    number={2} 
                    onSubmit={findSecondUser} 
                    userInfo={secondUser} 
                    showUser={isShowSecondUserInfo}
                    onReset={() => onReset('second')}
                    showError={showFirstError}
                    userRepo={secondRepo}
                    battleResult={battleResult.second}
                    setTotal={setSecondTotal}
                />
            </div> 
            {!showResetButton && isShowFirstUserInfo && isShowSecondUserInfo &&  
                <BattleButton />
            } 
            {showResetButton && <ResetButton/>}
        </div> 
    </>
}

export default Players;