import React, { memo } from 'react'
import { TopRankingWrapper } from './style'
import { getSizeImage } from '../../utils/format-utils';


const index = memo((props) => {
    const { info } = props;
    return (
        <TopRankingWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={info.coverImgUrl} alt='' />
                    <a href='/todo' className='image_cover'>ranking</a>
                </div>
                <div className='info'>
                    <a href='/todo'>{info.name}</a>
                    <div>
                        <button className='btn play sprite_02'></button>
                        <button className='btn favor sprite_02'></button>
                    </div>
                </div>

            </div>
            <div className='list'>
                {
                     info.tracks?.slice(0,10).map((item,index)=>{
                        return(
                            <div key={item.id} className='list-item'>
                                <div className='rank'>{index+1}</div>
                                <div className='name'>{item.name} </div>
                                <div className='operate'>
                                    <button className='btn sprite_02 play'></button>
                                    <button className='btn sprite_icon2 addto'></button>
                                    <button className='btn sprite_02 favor'></button>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
            <div className='footer'></div>
        </TopRankingWrapper>
    )
})

export default index