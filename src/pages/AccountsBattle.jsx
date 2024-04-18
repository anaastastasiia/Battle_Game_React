import { useState, useEffect } from "react";
import Players from "../components/Players/Players";
import service from '../service/users';
import UserContext from '../components/contexts/UserContext';

const AccountsBattle = () => {
    const [firstUser, setFirstUser] = useState({});
    const [secondUser, setSecondUser] = useState({});
    const [isShowFirstUserInfo, setIsShowFirstUserInfo] = useState(false);
    const [isShowSecondUserInfo, setIsShowSecondUserInfo] = useState(false);
    const [username, setUsername] = useState("");
    const [showSecondError, setShowFirstError] = useState(false);
    const [showFirstError, setShowSecondError] = useState(false);
    const [showBattleInfo, setShowBattleInfo] = useState(false);
    const [firstRepo, setFirstRepo] = useState([]);
    const [secondRepo, setSecondRepo] = useState([]);
    const [showResetButton, setShowResetButton] = useState(false);
    const [battleResult, setBattleResult] = useState({});
    const [firstTotal, setFirstTotal] = useState();
    const [secondTotal, setSecondTotal] = useState();


    const findFirstUser = async (e) => {
        e.preventDefault();
        try {
            const response = await service.getUsers(username);
            setFirstUser(response);
            setIsShowFirstUserInfo(true);
        } catch (err) {
            setShowFirstError(true);
            console.error(err);
        }
    }

    const findSecondUser = async (e) => {
        e.preventDefault();
        try {
            const response = await service.getUsers(username);
            setSecondUser(response);
            setIsShowSecondUserInfo(true);
        } catch (err) {
            setShowSecondError(true);
            console.log(err);
        }
    }

    const onBattle = async () => {
        setShowBattleInfo(true);
        setShowResetButton(true);
        try {
            const responseForFirst = await service.getUserRepoDetails(firstUser.name);
            const responseForSecond = await service.getUserRepoDetails(secondUser.name);
            setFirstRepo(responseForFirst);
            setSecondRepo(responseForSecond);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if(firstTotal && secondTotal){
            setBattleResult({
                first: firstTotal>=secondTotal,
                second: secondTotal>=firstTotal
            })
        }
    }, [firstTotal, secondTotal])

    return <> 
        <UserContext.Provider 
            value={{
                firstUser, 
                secondUser, 
                findFirstUser,
                findSecondUser,
                isShowFirstUserInfo, 
                setIsShowFirstUserInfo,
                isShowSecondUserInfo,
                setIsShowSecondUserInfo,
                username,
                setUsername,
                showSecondError,
                showFirstError,
                onBattle,
                firstRepo,
                secondRepo,
                showResetButton, 
                setShowResetButton,
                setShowBattleInfo,
                showBattleInfo,
                firstTotal,
                setFirstTotal,
                secondTotal,
                setSecondTotal,
                battleResult,
                setFirstUser,
                setShowFirstError,
                setFirstRepo,
                setSecondUser,
                setShowSecondError,
                setSecondRepo,
                setBattleResult
            }}
        >
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                <h1>Let's Get Ready to Rumble</h1>
                <Players />
            </div> 
        </UserContext.Provider>
    </>
}

export default AccountsBattle;