import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { PlaybarWrapper,Control, PlayInfo, Operator } from './style';
import {Slider} from 'antd';

const AppPlayer = memo(() => {
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
              <img src="" alt=""/>
            </a>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>紅豆</span>
              <a href='/#' className='singer-name'>要不要買菜</a>
            </div>
            <div className='progress'>
              <Slider defaultValue={30}/>
              <div className='time'>
                <span className='now-time'>02:30</span>
                <span className='divider'>/</span>
                <span className='duration'>04:30</span>
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