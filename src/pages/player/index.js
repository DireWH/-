import React from 'react';
import {
    PlayerLeft,
    PlayerRight,
    PlayerWrapper
} from './style'

const Player = () => {
    return (
        <PlayerWrapper>
            <div className='content w980'>
                <PlayerLeft>
                    <h2>PlayerInfo</h2>
                    <h2>SongContent</h2>
                </PlayerLeft>
                <PlayerRight>
                    <h2>Songs</h2>
                    <h2>SongContent</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    );
}

export default Player;
