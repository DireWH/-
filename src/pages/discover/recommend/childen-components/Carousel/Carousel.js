import React, { memo, useCallback, useEffect,useRef, useState } from 'react'
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './styled'
import { Carousel } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction,getTopListAction } from '../../store/actionCreators';


const TopBanner = memo(() => {
    const [currentIndex,setCurrentIndex]=useState(0);

    const dispatch = useDispatch();
    const { topBanners } = useSelector(state => ({
        topBanners: state.get('recommend').get('topBanners')
    }), shallowEqual)

    //加载时发送请求
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    

    const bannerRef = useRef();

    const bannerChange = useCallback((from,to)=>{
        setCurrentIndex(to);
    },[])

    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl) +"?imageView&blur=40x20"
    
    return (
        <BannerWrapper bgImage={bgImage}>
            <div className='banner '>
                <BannerLeft>
                    <Carousel effect='fade' autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div key={item.imageUrl}>
                                        <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className='btn left' onClick={ e=> bannerRef.current.prev()}></button>
                    <button className='btn right' onClick={e=> bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

export default TopBanner