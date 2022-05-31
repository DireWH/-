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

export function getTopAlbums(){
  return requests({
    url:'/album/newest',
  })
}
//-----------------------------首页新碟上榜的请求数据--------------------

export function getTopList(){
  return requests({
    url:'toplist/detail',
  })
}
//--------------------------------首页榜单的请求数据---------------------

export function getToplistInfo() {
  return requests({
    url: '/toplist'
  })
}

export function getToplistDetail(id) {
  return requests({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}