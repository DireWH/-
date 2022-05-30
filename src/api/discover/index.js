import requests from '../request'

export const getBanner=()=>{
    return requests({url:'/banner',method:'get'})
}

export function getHotRecommends() {
    return requests({
      url: "/personalized",
    })
  }