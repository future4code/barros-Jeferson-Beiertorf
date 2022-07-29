import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import Registration from "./components/Registration";



const App = (props) => {
  
  const switchToPage=(event)=>{
    event.preventDefault();
    props.setRegistration(true)
  }
return(
  <>
  <button onClick={switchToPage}>Ver lista usuários</button>
  </>
)

}
export default App;
