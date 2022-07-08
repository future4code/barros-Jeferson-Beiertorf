import React, { useState } from 'react';
import Post from './components/Post/Post';
import { MainContainer, MyForm } from './style';



function App() {
    
    const listaPost = [
      {nomeUsuario:'Paulinha', fotoUsuario:'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150'},
      {nomeUsuario:'Goku', fotoUsuario:'https://picsum.photos/51/54', fotoPost: 'https://picsum.photos/200/151'},
      {nomeUsuario:'Cebolinha', fotoUsuario:'https://picsum.photos/52/55', fotoPost: 'https://picsum.photos/201/156'},
    ]
    const [postar, setInputPostar] = useState(listaPost)

    const [inputNome,setInputNome] = useState("")
    const [inputFotoPerfil, setInputFotoPerfil] = useState("")
    const [inputFotoPost, setInputFotoPost] = useState("")

    const trocaNome = (event)=>{
      setInputNome(event.target.value)
    }
    const trocaFotoPerfil = (event)=>{
      setInputFotoPerfil(event.target.value)
    }
    const trocaFotoPost = (event)=>{
      setInputFotoPost(event.target.value)
    }
  
    const adicionarPost = (event)=>{
      event.preventDefault()
    const novoArray=[...listaPost, {nomeUsuario:inputNome,fotoUsuario:inputFotoPerfil,fotoPost:inputFotoPost}]
    setInputPostar(novoArray)
    setInputNome("")
    setInputFotoPerfil("")
    setInputFotoPost("")
    }

    const postMap = listaPost.map((item)=>{
      return <Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost ={item.fotoPost} />
    })
      
      return (
        <div>
          <ul> {componentePost}</ul>
        </div>
        
        
      )}

      return(
        <MainContainer>
        <MyForm>
          <input type='text' required placeholder='Nome' value={inputNome} onChange={trocaNome}></input>
          <input type='text' required placeholder='Foto perfil' value={inputFotoPerfil} onChange={trocaFotoPerfil}></input>
          <input type='text' required placeholder='Poste sua foto' value={inputFotoPost} onChange={trocaFotoPost}></input>
          <button onClick={adicionarPost}>Postar</button>
        </MyForm>

      </MainContainer>
    
      )

export default App;
