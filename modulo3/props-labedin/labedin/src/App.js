import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './components/img/EDIT.jpg';
import ford from './components/img/Ford_logo.svg.png'
import mecanica from './components/img/logo_mec.jpg'
import map from './components/img/map-solid.svg'
import email from './components/img/at-solid.svg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {foto}
          nome="Jeferson Nascimento Beiertorf" 
          descricao="Oi, me chamo Jeferson. Sou estudando de desenvolvimento web na Labenu, estou muito animado com as aulas, gostando bastante de aprender sobre programação, a equipe da Labenu é demais!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className='email-adress'>
        <CardPequeno
        imagem={email}
        nome= "EMAIL:"
        descricao="jefersonbeiertorf@gmail.com"
        />
        <CardPequeno
        imagem={map}
        nome= "ENDEREÇO:"
        descricao="Av. Oscar Schick, 1911"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {ford} 
          nome="SuperAuto Ford" 
          descricao="Mecânico Automotivo - Reparador automotivo em suspensão, freios, caixas de câmbio, motores, diagnósticos. " 
        />
        
        <CardGrande 
          imagem={mecanica} 
          nome="Mecânica Nascimento" 
          descricao="Mecânico Automotivo - Reparador automotivo em suspensão, freios, caixas de câmbio, motores, diagnósticos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
