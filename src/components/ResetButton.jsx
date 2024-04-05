import {useContext} from 'react';
import UsersContext from "./contexts/UserContext";

const ResetButton = () => {
    const {
        setIsShowFirstUserInfo,
        setIsShowSecondUserInfo,
        setFirstTotal,
        setSecondTotal,
        setFirstUser,
        setShowFirstError,
        setFirstRepo,
        setSecondUser,
        setShowSecondError,
        setSecondRepo,
        setBattleResult,
        setShowBattleInfo,
        setShowResetButton
    } = useContext(UsersContext);

    const onResetForm = () => {
        setIsShowFirstUserInfo(false);
        setFirstUser({});
        setShowFirstError(false);
        setFirstRepo([]);
        setIsShowSecondUserInfo(false);
        setSecondUser({});
        setShowSecondError(false);
        setSecondRepo([]);
        setSecondTotal();
        setFirstTotal();
        setBattleResult({});
        setShowBattleInfo(false);
        setShowResetButton(false);
    }

    return <><button onClick={onResetForm}>Reset</button></>
}

export default ResetButton;