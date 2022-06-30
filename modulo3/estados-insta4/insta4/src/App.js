import React, {useState} from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'Paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          <Post
            nomeUsuario={'Goku'}
            fotoUsuario={'https://picsum.photos/51/54'}
            fotoPost={'https://picsum.photos/200/151'}
          />

          <Post
            nomeUsuario={'Cebolinha'}
            fotoUsuario={'https://picsum.photos/52/55'}
            fotoPost={'https://picsum.photos/201/156'}
          />
  </div>
)

}


export default App;
