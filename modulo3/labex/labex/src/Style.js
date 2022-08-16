import styled from "styled-components";
import background from "./Images/Background.gif"


export const BackgroundLogin = styled.div`
    width:100%;
    height:100vh;
    background-image: url(${background});
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
 

    .login-form{
        color: orange;
        background-color: black;
        border: 2px orange solid;
        border-radius:3vh;
        width:50vw;
        height: 40vh;
        display:flex;
        flex-direction:column;
        text-align:center;
        justify-content:center;
        align-items:center;
    }
    .form{
        font-weight:bold;  
        display:flex;
        text-align:center;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:1vw;
    }
    input{
        width:40vh;
        border: 1px solid orange;
        border-radius:2vh;
        text-align:center;
    }
    button{
        width: 12vh;
        border-radius: 1vh;
        background-color:orange;
        font-weight:bold;  
        justify-content:center;      
    }
    `

export const BackgroundHome = styled.div`
width:100%;
height:100vh;
background-image: url(${background});
display:flex;
text-align:center;
align-items:center;
justify-content:center;
background-size:cover;
background-repeat:no-repeat;
background-position:center;
section{
        font-size:1.4rem;
        color: orange;
        background-color: black;
        border: 2px orange solid;
        border-radius:3vh;
        width:50vw;
        height: 30vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
}
    button{
        width: 12vh;
        border-radius: 1vh;
        background-color:orange;
        font-weight:bold;
        justify-content:center;     
    }
`
export const CardItem = styled.div`
    background-color:black;
    color:whitesmoke;
    border-radius: 3vh;
    border: 2px orange solid;
    text-align:center;
    padding:5px;
`

export const BackgroundListTrips = styled.div`
width:100%;
height:100vh;
background-image: url(${background});
background-size:cover;
background-repeat:no-repeat;
background-position:center;
display:flex;
text-align:center;
align-items:center;
justify-content:center;
flex-direction:column;


button{
    width: 30vh;
    height:4vh;
    border-radius: 1vw;
    background-color:orange;
    font-weight:bold;
    display: flex;
    align-items: center;
    justify-content: center;
    }
ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap:10px;
        list-style:none;
}
`

export const BackgroundAppForm = styled.div`
width:100%;
height:100vh;
background-image: url(${background});
display:flex;
text-align:center;
align-items:center;
justify-content:center;
background-size:cover;
background-repeat:no-repeat;
background-position:center;
.form-register{
        color: orange;
        background-color: black;
        border: 2px orange solid;
        border-radius:3vh;
        width:50vw;
        display:flex;
        flex-direction:column;
        text-align:center;
        justify-content:center;
        align-items:center;
        gap:10px;
        padding:10px;
}
form{
    gap:10px;
    display:flex;
    flex-direction:column;
    width:60%;
    height:100%;
    
}
input{
    border: 1px solid orange;
    border-radius:2vh;
    text-align:center;
}
select{
    border: 1px solid orange;
    border-radius:2vh;
    text-align:center;
}
button{
    width: 20vh;
    border-radius: 1vh;
    background-color:orange;
    font-weight:bold;  
    justify-content:center;      
}
`

export const BackgroundAdmin = styled.div`
width:100%;
height:100vh;
background-image: url(${background});
display:flex;
text-align:center;
align-items:center;
justify-content:center;
background-size:cover;
background-repeat:no-repeat;
background-position:center;
section{
        font-size:1.4rem;
        color: orange;
        background-color: black;
        border: 2px orange solid;
        border-radius:3vh;
        width:40vw;
        height: 20vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
}

button{
        width: 12vh;
        border-radius: 1vh;
        background-color:orange;
        font-weight:bold;
        justify-content:center;   
    }
`

export const BackgroundCreateTrip = styled.div`
width:100%;
height:100vh;
background-image: url(${background});
display:flex;
text-align:center;
align-items:center;
justify-content:center;
background-size:cover;
background-repeat:no-repeat;
background-position:center;
.form-create-trip{
        color: orange;
        background-color: black;
        border: 2px orange solid;
        border-radius:3vh;
        width:50vw;
        display:flex;
        flex-direction:column;
        text-align:center;
        justify-content:center;
        align-items:center;
        gap:10px;
        padding:10px;
}
form{
    gap:10px;
    display:flex;
    flex-direction:column;
    width:60%;
    height:100%;
    
}
input{
    border: 1px solid orange;
    border-radius:2vh;
    text-align:center;
}
select{
    border: 1px solid orange;
    border-radius:2vh;
    text-align:center;
}
button{
    width: 20vh;
    border-radius: 1vh;
    background-color:orange;
    font-weight:bold;  
    justify-content:center;      
}
`

export const BackgroundTripDetails = styled.div`
width:100%;
height:100vh;
background-image: url(${background});
display:flex;
text-align:center;
align-items:center;
justify-content:center;
background-size:cover;
background-repeat:no-repeat;
background-position:center;
`

