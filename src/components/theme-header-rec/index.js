import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import propTypes from 'prop-types'


const ThemHeader = memo((props) => {
  const{title,keywords}= props
  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h2 className='title'>{title}</h2>
        <div className='keyword'>
          {
            keywords.map((item,index)=>{
              return (
                <div className='item' key={item}>
                  <a href='todo'>{item}</a>
                  <span className='divider'>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='right'>
        <a href='todo'>更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

ThemHeader.propTypes ={
  title:propTypes.string.isRequired,
  keywords: propTypes.array
}

ThemHeader.defaultProps={
  keywords:[]
}
export default ThemHeader