import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";

const Registration = () => {

const [listUsers, setListUsers] = useState([])
const [inputName, setInputName] = useState("");
const [inputEmail, setInputEmail] = useState("");


// Dados input //
const attInputName = (event) => {
  setInputName(event.target.value);
}
const attInputEmail = (event) => {
  setInputEmail(event.target.value);
}
useEffect(()=>{
  getAllUser();
},[]);

// importando axios // 
const url = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const myHeaders = {
  headers:{
    Authorization: "jeferson-beiertorf-barros"
  }
};

// Função Get //
const getAllUser = () => {
axios
.get(url, myHeaders)
.then((response)=>{
  setListUsers(response.data)
  console.log(response);
})
.catch((erro) => {
  console.log(erro);
})
}


// Função POST //
const body = {
"name": inputName,
"email": inputEmail
}

const postUser = (e) => {
e.preventDefault();
axios
.post(url, body, myHeaders)
.then(() => {
  alert("Usuário criado com sucesso!");
  getAllUser();
})
.catch((erro) => {
  alert("Algo está errado, tente novamente!")
});
setInputName("")
setInputEmail("")
}

return(
    <>
    <h1>Crie seu cadastro aqui!</h1>
    {/* {listUsers.map((user) => {
      return <li key={user.id}>{user.name}</li>
    })} */}
    <form>
        <label>Nome:</label>
      <input
      type="text"
      placeholder="Digite seu nome"
      value={inputName}
      onChange={attInputName}/>

      <label>E-mail:</label>
      <input
      type="text"
      placeholder="Digite seu E-mail"
      value={inputEmail}
      onChange={attInputEmail}/>
      <button onClick={postUser}>
        Criar Usuário
      </button>  
    </form>
    </>
  )
  
  }

  export default Registration;