import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  flex:1;
  .header{
      height:100px;
      display:flex;

      margin:20px 0 0 20px;

      .image{
          width:80px;
          height:80px;
          position:relative;

          img{
              width:80px;
              height:80px;
          }
      }

      .info{
          margin: 5px 0 0 10px;
          a{
              color:black;
              font-size:15px;
          }
          
          .btn{
              display:inline-block;
              text-indent: -9999px;
              width:22px;
              height:22px;
              margin: 8px 10px 0 0;
              cursor:pointer;
              &.play:hover{
                background-position:-327px -205px;;
              }
              &.favor:hover{
                background-position:-300px -235px;;
              }
          }

          .play{
              background-position:-267px -205px;
          }

          .favor{
              background-position: -300px -205px;
          }
      }
  }

  .list{
      .list-item{
          position:relative;
          display:flex;
          align-items:center;
          height:32px;

          :nth-child(-n+3) .rank{
              color: #c10d0c;
          }

          .rank{
              width:35px;
              text-align:center;
              margin-left:10px;
              font-size:16px;
          }

          .info{
              color:#000;
              font-size:12px;
              display:flex;
              justify-content:space-between;
              width:170px;

              .name{
                  flex:1;
              }
              .operate{
                width:82px;
                display:flex;
                align-items:center; 
                display:none;
                
                .btn{
                    width:17px;
                    height:17px;
                    margin-right:8px;
                    cursor:pointer;
                }
  
                .play{
                    background-position: -267px -268px
                }
  
                .addto{
                    position: relative;
                    top:2px;
                    background-position: 0 -700px;
                }
  
                .favor{
                    background-position: -297px -268px;
                }
            }
          }

          &:hover{
              .operate{
                  display:block;
              }
          }
      }
  }

  .footer{
      height:32px;
      display:flex;
      align-items:center;
      margin-right:32px;
      justify-content:flex-end;
      font-size:12px;

      a{
          color:#000;   
      }
  }
`