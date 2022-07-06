import React from 'react';
import Post from './components/Post/Post';
import {MainContainer} from './style.css'

// confesso que não sei se está certo,
// não consegui pegar a aula de segunda-feira e estou sem cabeça pra pensar no código :( 

function App() {
    const listaPost = [
      {nomeUsuario:'Paulinha', fotoUsuario:'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150'},
      {nomeUsuario:'Goku', fotoUsuario:'https://picsum.photos/51/54', fotoPost: 'https://picsum.photos/200/151'},
      {nomeUsuario:'Cebolinha', fotoUsuario:'https://picsum.photos/52/55', fotoPost: 'https://picsum.photos/201/156'},
    ]

    const componentePost = listaPost.map ((valor, index) => {
      return <li key={index}><Post nomeUsuario={valor.nomeUsuario} fotoUsuario=
      {valor.fotoUsuario} fotoPost={valor.fotoPost}/></li>
      })
      
      console.log (listaPost)
      
      return (
 
          <ul> {componentePost}</ul>
       
      )}


export default App;
