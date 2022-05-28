import React, { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Carousel_content from '../../UI/Carousel.js'
import { TopNavigator, Carousel } from './style.js'
import axios from 'axios'
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
          <NavLink to={'/discover'}>推荐</NavLink>
          <NavLink to={'/discover/toplist'}>排行榜</NavLink>
          <NavLink to={'/discover/playlist'}>歌单</NavLink>
          <NavLink to={'/discover/djradio'}>主播电台</NavLink>
          <NavLink to={'/discover/artist'}>歌手</NavLink>
          <NavLink to={'/ddiscover/album'}>新碟上架</NavLink>
        </div>
      </TopNavigator>
      <Carousel>
        <Carousel_content banner={banner}></Carousel_content>
      </Carousel>
    </div>
  )
})

export default Content