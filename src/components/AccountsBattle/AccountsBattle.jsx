import { useState } from "react";
import Players from "../Players/Players";
import service from '../../service/users';
import UserContext from '../contexts/UserContext';
import '../styles.css';

const AccountsBattle = () => {
    const [firstUser, setFirstUser] = useState({});
    const [secondUser, setSecondUser] = useState({});
    const [isShowFirstUserInfo, setIsShowFirstUserInfo] = useState(false);
    const [isShowSecondUserInfo, setIsShowSecondUserInfo] = useState(false);
    const [username, setUsername] = useState("");
    const [showSecondError, setShowFirstError] = useState(false);
    const [showFirstError, setShowSecondError] = useState(false);
    const [showButtonBattle, setShowButtonBattle] = useState(false);
    const [firstRepo, setFirstRepo] = useState([]);
    const [secondRepo, setSecondRepo] = useState([]);

    const findFirstUser = async (e) => {
        e.preventDefault();
        try {
            const response = await service.getUsers(username);
            setFirstUser(response);
            setIsShowFirstUserInfo(true);
        } catch (err) {
            setShowFirstError(true);
            console.log(err);
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
        setShowButtonBattle(true);
        try {
            const responseForFirst = await service.getUserRepoDetails(firstUser.name);
            const responseForSecond = await service.getUserRepoDetails(secondUser.name);
            setFirstRepo(responseForFirst);
            setSecondRepo(responseForSecond);
        } catch (err) {
            console.log(err);
        }
    }

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
                showButtonBattle,
                firstRepo,
                secondRepo
            }}
        >
            <div className="wrapper" style={{flexDirection: 'column', alignItems: 'center'}}> 
                <h1>Let's Get Ready to Rumble</h1>
                <Players />
            </div> 
        </UserContext.Provider>
    </>
}

export default AccountsBattle;