import * as actionTypes from './constants'
import { getBanner,getHotRecommends, getTopAlbums,getToplistDetail } from '../../../../api/discover'

const changeTopBannerAction =(res)=>({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})

export const getTopBannerAction=()=>{
    return dispatch=>{
        getBanner().then(res=>{
            dispatch(changeTopBannerAction(res))
        })
    }
}
//--------------------------------這部分是獲取首頁輪播的請求----------------------------------------------//

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result,
  })

  export const getHostBannersAction = (limit) => {
    return (dispatch) => {
      getHotRecommends(limit).then((res) => {
        dispatch(changeHotRecommendAction(res))
      })
    }
  }
//--------------------------------這部分是獲取首頁推薦的請求----------------------------------------------//

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
})

export const getNewAlbumAction = () => {
  return (dispatch) => {
    getTopAlbums().then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}


//--------------------------------這部分是獲取首頁碟片的請求----------------------------------------------//

export const changeUpRanking = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
})
// 新歌榜单Action
export const changeNewRanking = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
})
// 原创榜单Action
export const changeOriginRanking = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})


export const getTopListAction = (idx) => {
  return (dispatch) => {
    getToplistDetail(idx).then((res) => {
      switch (idx) {
        case 19723756:
          dispatch(changeUpRanking(res))
          break
        case 3779629:
          dispatch(changeNewRanking(res))
          break
        case 2884035:
          dispatch(changeOriginRanking(res))
          break
        default:
      }
    })
  }
}
//--------------------------------這部分是獲取首頁排名的請求----------------------------------------------//
