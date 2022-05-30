import requests from '../request'

export const getBanner=()=>{
    return requests({url:'/banner',method:'get'})
}

export function getHotRecommends(limit) {
    return requests({
      url: "/personalized",
      params:{
        limit:8
      }
    })
  }
//-------------------------------首页推荐页面的数据请求------------------------------

export function getTopAlbums(limit,offset){
  return requests({
    url:'/top/album',
    params:{
      limit,
      offset
    }
  })
}
//-----------------------------首页新碟上榜的请求数据--------------------