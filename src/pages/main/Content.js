import React, { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Carousel_content from '../../UI/Carousel.js'
import { TopNavigator, Carousel,Downpart } from './style.js'
import { SmileTwoTone  } from '@ant-design/icons';
import { getBanner } from '@/api/index'

const Content = memo(() => {
  const [banner, setBanner] = useState([])
  useEffect(() => {
    getBanner().then(res => { 
      setBanner(res.banners)
    })
  }, [])
  useEffect(() => {
    console.log(banner)
  }, [banner])

  return (
    <div>
      <TopNavigator>
        <div className='navigator'>
          <NavLink to={'/discover'} end>推荐</NavLink>
          <NavLink to={'/discover/toplist'} end>排行榜</NavLink>
          <NavLink to={'/discover/playlist'} end>歌单</NavLink>
          <NavLink to={'/discover/djradio'} end>主播电台</NavLink>
          <NavLink to={'/discover/artist'} end>歌手</NavLink>
          <NavLink to={'/ddiscover/album'} end>新碟上架</NavLink>
        </div>
      </TopNavigator>
      <Carousel>
        <Carousel_content banner={banner}></Carousel_content>
      </Carousel>
      <Downpart>
          <div className='Recommend-Navi'>
            <SmileTwoTone twoToneColor="red" style={{fontSize:'12px', marginTop:'14px'}}/><h3>热门推荐</h3>
            <ul>
              <li>华语<span>|</span></li>
              <li>流行<span>|</span></li>
              <li>摇滚<span>|</span></li>
              <li>民谣<span>|</span></li>
              <li>电子<span>|</span></li>
            </ul>
          </div>

          <div className='Recommend-Container'>
            <div className='Recommend-wrapper'></div>
          </div>
      </Downpart>
    </div>
  )
})

export default Content