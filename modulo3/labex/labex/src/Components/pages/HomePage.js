import React from "react";
import { useNavigate } from 'react-router-dom';
import {  BackgroundHome } from "../../Style";

function HomePage() {
  const navigate= useNavigate();

  const goToList = () =>{
    navigate("/list-trips")
  }

  const goToLogin = () =>{
    navigate("/login-page")
  }
    return (
    <BackgroundHome>
      <section>
        <h2>Welcome to</h2>
        <h1>LabeX</h1>
        <div className="button">
          <button onClick={ goToList }>List Trips</button>
          <button onClick={ goToLogin }>Login</button>
        </div>
      </section>
    </BackgroundHome>
    );
  }
  
  export default HomePage;
