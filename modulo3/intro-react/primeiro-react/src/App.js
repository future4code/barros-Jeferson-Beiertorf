import fotoPerfil from './IMG_7441.JPG';
import './App.css';

function App() {
  const meuNome = "Hi! I'm Jeferson Beiertorf!"
  function mensagem(){
    alert("Goodnight! Your beauties!!!!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>{meuNome}</h3>
        <img src={fotoPerfil} className="App-logo" alt="logo" />
        <p>
        I'm a student at Labenu and this is my first project in React
        </p>
        <button className="botao" onClick={mensagem}>Click Aqui!</button>
      </header>
    </div>
  );
}

export default App;
