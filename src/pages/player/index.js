import React, { useEffect, useState } from 'react';
import { useSearchParams, useParams, useLocation} from 'react-router-dom';
import { getSongDetail } from '../../api/discover';
import {
    PlayerLeft,
    PlayerRight,
    PlayerWrapper
} from './style'

const Player = () => {
    const [songInfo,setSongInfo]= useState([])
   const [search,setSearch]= useSearchParams()
    useEffect(()=>{
        const id =search.get('id')
        getSongDetail(id).then(res=>{setSongInfo(res.songs)})
    }
    ,[])

    useEffect(()=>{
        console.log(songInfo)
    }
    ,[songInfo])

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
