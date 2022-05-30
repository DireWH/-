import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getHostBannersAction } from '../../store/actionCreators';
import { HotRecommendWrapper } from './styled'

const index = memo(() => {

    const dispatch = useDispatch();
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.get('recommend').get('hotRecommends')
    }), shallowEqual)

    //加载时发送请求
    useEffect(() => {
        dispatch(getHostBannersAction())
    }, [dispatch])

  return (
    <HotRecommendWrapper>
        {hotRecommends[0]?.id}
    </HotRecommendWrapper>
  )
})

export default index