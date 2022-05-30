import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { TopNavigator, RecommendWrapper,RecommendLeft,RecommendRight,Container } from './style.js'
import  HotRecommendWrapper  from './childen-components/hot-recommend/index.js';
import TopBanner from './childen-components/Carousel/Carousel';
import Album from './childen-components/new-album/index.js';
import Ranking from './childen-components/recommend-ranking/index.js';


//数据使用immutable和react-redux
const Content = memo((props) => {
 
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

      <RecommendWrapper>
        <TopBanner />
        <Container className='w980'>
          <RecommendLeft>
            <HotRecommendWrapper/>
            <Album/>
            <Ranking/>
          </RecommendLeft>
          <RecommendRight></RecommendRight>
        </Container>
      </RecommendWrapper>


    </div>
  )
})

export default Content