import styled from 'styled-components'
export const TopNavigator = styled.div`
      background-color: #C20C0C;
      width:100%;
      height:39px;
      display:flex;
      justify-content:center;
      .navigator{
          
          width:490px;
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
export const Carousel = styled.div`
   img{
       margin:0 auto
   }
`

export const Downpart = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
align-items:center;
    .Recommend-Navi{
      width:1080px;
      display:flex;
      justify-content:flex-start;
      border-bottom:1px red solid;
      
      h3{
          line-height:43px;
          margin-left:15px;
      }
      ul{
          display:flex;
          line-height:43px;
          font-size:10px;
          li:nth-child(1){
              margin-left:15px;
          }
          span{
              margin-left:15px;
              margin-right:15px;
          }
      }
  }
  .Recommend-Container{
      width:1080px;
      background-color:blue;
      display:flex;
      justify-content:flex-start;
       .Recommend-wrapper{
          width:680px;
          height:500px;
          background-color:yellow
      }
  }

`