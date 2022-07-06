import React from "react";
import styled from "styled-components";
import {Footer, Header, Left, Main, Right} from "./style" 
import ImgLogo from "./img/picture.png"
import Forms from "./components/forms";

function App() {
  return (
    <div className="App">
      <Header>
        <img src={ImgLogo}/>
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
