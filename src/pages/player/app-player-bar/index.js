import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';
import { Slider } from 'antd';
import { getSongDetailAction, changeSequenceAction, changeCurrentIndexAndSongAction } from '../store/actionCreators';
import { getSizeImage, getPlaySong, formatDate } from '@/utils/format-utils';


const AppPlayer = memo(() => {
  //props and state

  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  const { currentSong, sequence } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"])
  }), shallowEqual)

  const audioRef = useRef();

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying);
  }, [isPlaying])

  useEffect(() => {
    // 只有切歌或第一次时需要得到src
    audioRef.current.src = getPlaySong(currentSong.id)
    setCurrentTime(0);
    setProgress(0);
    audioRef.current.play().then(res => {
      setIsPlaying(true)
      console.log('播放成功')
    }).catch(err => {
      setIsPlaying(false)
      console.log(err)
    })

  }, [currentSong])



  useEffect(() => { console.log(isPlaying) }, [isPlaying])
  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress(currentTime / currentSong?.dt * 100)
    }
  }

  const showDuration = formatDate(currentSong?.dt, "mm:ss")
  const showCurrentTime = formatDate(currentTime, 'mm:ss')

  const sliderChange = useCallback((value) => {
    setIsChanging(true);
    setCurrentTime(value / 100 * currentSong?.dt)
    setProgress(value);
  }, [currentSong])

  const afterSliderChange = useCallback((value) => {
    const theCurrentTime = value / 100 * currentSong?.dt / 1000
    audioRef.current.currentTime = theCurrentTime;
    setCurrentTime(theCurrentTime * 1000)
    setIsChanging(false);
  }, [currentSong])

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) { currentSequence = 0 }
    dispatch(changeSequenceAction(currentSequence));
  }

  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag));
  }

  const handleEnd = () => {
    if (sequence === 2) { audioRef.current.currentTime = 0;  audioRef.current.play()}
    else{
      dispatch(changeCurrentIndexAndSongAction(+1))
    }
  }




  return (
  <PlaybarWrapper className='sprite_player'>
    <div className='content w980'>
      <Control isPlaying={isPlaying} >
        <button className='sprite_player prev' onClick={e => changeMusic(-1)}></button>
        <button className='sprite_player play' onClick={e => { playMusic() }}></button>
        <button className='sprite_player next' onClick={e => changeMusic(+1)}></button>
      </Control>
      <PlayInfo>
        <div className='image'>
          <NavLink to={`/song?id=${currentSong.id}`}>
            <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt="" />
          </NavLink>
        </div>
        <div className='info'>
          <div className='song'>
            <span className='song-name'>{currentSong?.name}</span>
            <a href='/#' className='singer-name'>{currentSong.ar && currentSong.ar[0].name}</a>
          </div>
          <div className='progress'>
            <Slider defaultValue={30} value={progress}
              onChange={sliderChange}
              onAfterChange={afterSliderChange} />
            <div className='time'>
              <span className='now-time'>{showCurrentTime}</span>
              <span className='divider'>/</span>
              <span className='duration'>{showDuration}</span>
            </div>
          </div>
        </div>
      </PlayInfo>
      <Operator sequence={sequence}>
        <div className='left'>
          <button className='sprite_player btn favor'></button>
          <button className='sprite_player btn share'></button>
        </div>
        <div className='right sprite_player'>
          <button className='sprite_player btn volume'></button>
          <button className='sprite_player btn loop' onClick={e => changeSequence()} ></button>
          <button className='sprite_player btn playlist'></button>

        </div>
      </Operator>
    </div>
    <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => handleEnd()} />
  </PlaybarWrapper>
)
})

export default AppPlayer