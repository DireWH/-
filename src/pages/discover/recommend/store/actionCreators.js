import * as actionTypes from './constants'
import { getBanner,getHotRecommends, getTopAlbums } from '../../../../api/discover'

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
