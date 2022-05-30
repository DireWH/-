import React, { memo, useEffect,useRef } from 'react';
import ThemHeader from '@/components/theme-header-rec/';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getNewAlbumAction } from '../../store/actionCreators';
import { AlbumWrapper } from './style';
import { Carousel } from 'antd'
import AlbumCover from '@/components/album-cover/'
const Album = memo(() => {
    const albumRef=useRef();

    const dispatch = useDispatch();
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.get('recommend').get('newAlbums')
    }), shallowEqual)

    useEffect(() => {
        dispatch(getNewAlbumAction())
    }, [dispatch])
    return (
        <AlbumWrapper>
            <ThemHeader title="新碟上架" />
            <div className="content">
                <div className="inner">
                    <Carousel dots={false} ref={albumRef}>
                        {[0, 1].map(item => {
                            return (
                                <div key={item} className="page">
                                    {/* item * 5, (item+1) * 5   第一次遍历0  5  第二次遍历 5  10  */}
                                    {newAlbums && newAlbums.slice(item * 5, (item + 1) * 5).map(cItem => {
                                        return (
                                            <AlbumCover
                                                key={cItem.id}
                                                info={cItem}
                                                size={100}
                                                width={118}
                                                bgp="-570px"
                                            >
                                                {cItem.name}
                                            </AlbumCover>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <div
                    className="sprite_02 arrow arrow-left"
                    onClick={e => albumRef.current.prev()}
                ></div>
                <div
                    className="sprite_02 arrow arrow-right"
                    onClick={e => albumRef.current.next()}
                ></div>
            </div>
        </AlbumWrapper>
    );
})

export default Album;
