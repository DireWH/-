import styled from 'styled-components'
export const HeadLeft = styled.div`
    .logo{
        display:block;
        width:176px;
        height:69px;
        background-position:0 0;
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
             display:inline-block;
         }
         a.active{
            color:red;
        }
         
     }
     .divider{
         height:5px;
         width:100%;
         background-color: #C20C0C
     }
`