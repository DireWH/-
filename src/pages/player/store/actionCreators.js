import { getSongDetail } from "../../../api/discover"
import * as actionTypes from './constants'

const changeCurrentSongAction=(currentSong)=>({
    type: actionTypes.CHANGE_CURRENT_SONG ,
    currentSong
})

export const getSongDetailAction =(ids)=>{
    return dispatch =>{
        getSongDetail(ids).then(res=>{
            console.log(res)
            dispatch(changeCurrentSongAction(res.songs[0]))
        })
    }
}