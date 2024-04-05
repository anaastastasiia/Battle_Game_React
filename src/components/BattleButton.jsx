import {useContext} from 'react';
import UsersContext from "./contexts/UserContext";

const BattleButton = () => {
    const { onBattle } = useContext(UsersContext);

    return <><button onClick={onBattle}>Battle!</button></>
}

export default BattleButton;