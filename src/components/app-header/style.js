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