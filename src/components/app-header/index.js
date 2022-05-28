import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const WAppHeader = memo(() => {
  return (
    <div>
      <NavLink to={'/mine'}>我的音乐</NavLink>
      <NavLink to={'/friend'}>我的朋友</NavLink>
    </div>
  )
})

export default WAppHeader