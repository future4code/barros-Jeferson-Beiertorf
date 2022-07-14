import React from "react";
import {Footer, Header, Left, Main, Right} from "./style" 
import Forms from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header>
        <h1>LabZap</h1>
      </Header>

      <Main>
        <Left></Left>
        <Forms />
        <Right></Right>
      </Main>

      <Footer>
        copyright © 2022 All rights reserved. Jeferson N. Beiertorf - Curso Labenu
      </Footer>
    </div>
  );
}

export default App;