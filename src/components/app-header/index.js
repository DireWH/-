import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeadWrapper, HeadLeft,HeadRight } from "./style"
const WAppHeader = memo(() => {
  return (
    <HeadWrapper>
      <div className='content'>
        <HeadLeft>
          <a href='#/' className='logo sprite_01'></a>
        </HeadLeft>
        <NavLink to={'/discover'}>发现音乐<span className='sprite_01 icon'></span></NavLink>
        <NavLink to={'/mine'}>我的音乐<span className='sprite_01 icon'></span></NavLink>
        <NavLink to={'/friend'}>关注<span className='sprite_01 icon'></span></NavLink>
        <NavLink to={'/store'}>商城<span className='sprite_01 icon'></span></NavLink>
        <NavLink to={'/musician'}>音乐人<span className='sprite_01 icon'></span></NavLink>
        <NavLink to={'/download'}>下载客户端<span className='sprite_01 icon'></span></NavLink>
        <HeadRight>

          <HeadRight/>
      </div>
      <div className='divider'></div>
    </HeadWrapper>
  )
})

export default WAppHeader