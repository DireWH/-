import React,{memo} from 'react';
import ThemHeader from '@/components/theme-header-rec/';
import {RankingWrapper} from './style.js'
import TopRanking from '@/components/top-ranking'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
const Ranking = memo(() => {
    const {upRanking,newRanking,originRanking} = useSelector(state=>({
        upRanking:state.getIn(['recommend','upRanking']),
        newRanking:state.getIn(['recommend','newRanking']),
        originRanking:state.getIn(['recommend','originRanking'])

    }),shallowEqual)
    const dispatch= useDispatch()
    return (
        <RankingWrapper>
            <ThemHeader title="榜单"/>
            <div className='tops'>
                <TopRanking info={upRanking}></TopRanking>
                <TopRanking info={newRanking}></TopRanking>
                <TopRanking info={originRanking}></TopRanking>
            </div>
        </RankingWrapper>
    );
})

export default Ranking;
