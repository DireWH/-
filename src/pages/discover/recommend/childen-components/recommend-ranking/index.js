import React,{memo} from 'react';
import ThemHeader from '@/components/theme-header-rec/';
import {RankingWrapper} from './style.js'
const Ranking = memo(() => {
    return (
        <RankingWrapper>
            <ThemHeader title="榜单"/>
        </RankingWrapper>
    );
})

export default Ranking;
