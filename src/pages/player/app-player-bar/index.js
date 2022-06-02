import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { PlaybarWrapper,Control, PlayInfo, Operator } from './style';
import {Slider} from 'antd';
import { getSongDetailAction } from '../store/actionCreators';
import {getSizeImage} from '@/utils/format-utils';
import { formatDate } from '../../../utils/format-utils';


const AppPlayer = memo(() => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSongDetailAction(167876))
    },[dispatch])

    const {currentSong} =useSelector(state=>({
      currentSong: state.getIn(["player","currentSong"])
    }),shallowEqual)

    const showDuration =formatDate(currentSong?.dt, "mm:ss")
  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content w980'>
        <Control>
          <button className='sprite_player prev'></button>
          <button className='sprite_player play'></button>
          <button className='sprite_player next'></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <a href='/#'>
              <img src={getSizeImage(currentSong?.al?.picUrl,35)} alt=""/>
            </a>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong?.name}</span>
              <a href='/#' className='singer-name'>{currentSong.ar &&currentSong.ar[0].name }</a>
            </div>
            <div className='progress'>
              <Slider defaultValue={30}/>
              <div className='time'>
                <span className='now-time'>02:30</span>
                <span className='divider'>/</span>
                <span className='duration'>{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop'></button>
            <button className='sprite_player btn playlist'></button>

          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  )
})

export default AppPlayer