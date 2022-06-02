import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';
import { Slider } from 'antd';
import { getSongDetailAction } from '../store/actionCreators';
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

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)

  const audioRef = useRef();

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying);
  }, [isPlaying])

  useEffect(() => {
    // 只有切歌或第一次时需要得到src
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
      console.log('播放成功')
        }).catch(err => {
      setIsPlaying(false)
        console.log('播放失败')
    })
    
  }, [currentSong])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    setCurrentTime(0);
    setProgress(0);
  }, [currentSong])

  useEffect(()=>{ console.log(isPlaying)},[isPlaying])
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



  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content w980'>
        <Control isPlaying={isPlaying} >
          <button className='sprite_player prev'></button>
          <button className='sprite_player play' onClick={e => { playMusic() }}></button>
          <button className='sprite_player next'></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <a href='/#'>
              <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt="" />
            </a>
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
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} />
    </PlaybarWrapper>
  )
})

export default AppPlayer