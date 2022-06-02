import React,{memo,useEffect} from 'react';
import ThemHeader from '@/components/theme-header-rec/';
import {RankingWrapper} from './style.js'
import TopRanking from '@/components/top-ranking'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopListAction } from '../../store/actionCreators';
const Ranking = memo(() => {
    const {upRanking,newRanking,originRanking} = useSelector(state=>({
        upRanking:state.getIn(['recommend','upRanking']),
        newRanking:state.getIn(['recommend','newRanking']),
        originRanking:state.getIn(['recommend','originRanking'])

    }),shallowEqual)
    const dispatch= useDispatch()

    useEffect(() => { 
        dispatch(getTopListAction(19723756))
        dispatch(getTopListAction(3779629))
        dispatch(getTopListAction(2884035))
      }, [dispatch])
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
