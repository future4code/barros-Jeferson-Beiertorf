import styled from "styled-components";

export const MyForm = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    label {
        font-size: 30px;
        font-weight: bold;
    }
    input{
        margin: 10px;
        border-radius: 15px;
        font-size: 20px;
        padding: 5px 15px;
        width: 30vw;
        margin-bottom: 50px;
        }
    select {
        margin: 10px;
        border-radius: 15px;
        font-size: 20px;
        padding: 5px 15px;
        width: 30vw;
    }
` 