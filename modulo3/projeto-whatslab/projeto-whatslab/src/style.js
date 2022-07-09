import styled from "styled-components"


export const Header=styled.header`
    display:flex;
    align-items:center;
    justify-content: center;
    background-color: white;
    width:100%;
    height:4vw;
    h1{
    font-size: 2rem;
    font-weight: bold;
}
img{
    width:50px;
}
`

export const Main = styled.main`
    background-color: white;
    width: 100%;
    height: 43.3vw;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
`

export const Left = styled.div`
    background-color:orange;
    height:43.3vw;
    width:10%;
`

export const Form = styled.div`
    display:flex;
    gap: 30px;
    padding:10px;
// `

export const Right = styled.div`
    background-color:orange;
    height:43.3vw;
    width:10%;
    display:flex;
`


export const Footer = styled.footer`
    background-color:gray;
    width:100%;
    height:2vw;
    display:flex;
    align-items:center;
    justify-content:center;
`