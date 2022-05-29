import styled from 'styled-components'
export const HeadLeft = styled.div`
    .logo{
        display:block;
        width:176px;
        height:69px;
        background-position:0 0;
    }
`
export const HeadRight = styled.div`
    margin-left:50px;
    heigh:69px;
    width:300px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .search{
        width:170px;
        height:32px;
        border-radius:16px;
    }
    .textContainer{
        heiht:20px;
        line-height:22px;
        width:90px;
        text-align:center;
        font-size:12px;
        border: solid 1px grey;
        border-radius:16px;
        color:white;
    }
    .loginContainer{
        font-size:13px;
        color:grey;
        margin-left:5px;
    }
`
export const HeadWrapper = styled.div`
     
     background-color: #242424;
     display:flex;
     flex-wrap:wrap;
     justify-content:center;
     .content{
         height:70px;
         width:1000px;
         display:flex;
         justify-content:space-between;
         a{
             line-height:70px;
             position:relative;
             &.active{
                 color:red;
                 span{
                    position:absolute;
                    display:block;
                    width:12px;
                    height:7px;
                    background-position: -226px 0;
                    bottom:-2px;
                    left:50%;
                    transform:translate(-50%,0)

                }
             }
              
         }
         
         
     }
     .divider{
         height:5px;
         width:100%;
         background-color: #C20C0C
     }
`