import React, { useEffect, useState } from 'react';
import data from '../../Data/MOCK_DATA .json'
import Player from '../Player/Player';
import Selected from '../Selected/Selected';
const Team = () => {
    const [playerData, setPlayerData] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    useEffect(() => {

        setPlayerData(data)

    }, [])
    const handleAddButton = (eachPlayer) =>{
        const team = [...selectedPlayer, eachPlayer];
        setSelectedPlayer(team)
    }
    let btnState = true;
    return (
        <div className="d-flex text-center">
            <div className="player-list col-8 p-3 border m-1">
                {
                    playerData.map(eachPlayer => (
                        <Player key={eachPlayer.id} info={eachPlayer}
                        handleAddButton={()=>handleAddButton(eachPlayer)}/>
                    ))
                }
            </div>
            <div className="selected-list p-3 border col-4 m-1 bg-light">
                <Selected selectedPlayer={selectedPlayer} />
            </div>
        </div>
    );
};

export default Team;