import styled from 'styled-components'
export const TopNavigator = styled.div`
      background-color: #C20C0C;
      width:100%;
      height:39px;
      display:flex;
      justify-content:center;
      .navigator{
          
          width:565px;
          display:flex;
          justify-content:space-between;
          a{
              line-height:39px;
              font-size:12px;
              &.active{
                  color:skyblue;
              }
          } 
      }
`

export const RecommendWrapper = styled.div`
 
`

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  
`

export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  border-right: none;
`

export const RecommendRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

`
