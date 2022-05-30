import * as actionTypes from './constants'
import { getBanner,getHotRecommends } from '../../../../api/discover'

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

  export const getHostBannersAction = () => {
    return (dispatch) => {
      getHotRecommends().then((res) => {
        dispatch(changeHotRecommendAction(res))
      })
    }
  }
//--------------------------------這部分是獲取首頁推薦的請求----------------------------------------------//
