import * as actionTypes from './constants'
import { getBanner } from '../../../../api/discover'

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
