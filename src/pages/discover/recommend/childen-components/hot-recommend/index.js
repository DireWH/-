import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getHostBannersAction, getNewAlbumAction } from '../../store/actionCreators';
import { HotRecommendWrapper } from './styled'
import ThemHeader from '../../../../../components/theme-header-rec';
import SongCover from '../../../../../components/song-Cover';
import { getTopAlbums } from '../../../../../api/discover';
const index = memo(() => {

    const dispatch = useDispatch();
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.get('recommend').get('hotRecommends')
    }), shallowEqual)

    //加载时发送请求
    useEffect(() => {
        dispatch(getHostBannersAction(8))
    }, [dispatch])

   

    

  return (
    <HotRecommendWrapper>
       <ThemHeader title="推荐" keywords={['华语','流行','民谣','摇滚','电子']}/>
       <div className='recommend-list'>
         {
           hotRecommends.map((item,index)=>{
             return <SongCover key={item.id} info={item}/>
           })
         }
       </div>
    </HotRecommendWrapper>
  )
})

export default index