import React from "react";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate= useNavigate();

  const goToList = () =>{
    navigate("/list-trips")
  }

  const goToLogin = () =>{
    navigate("/login-page")
  }
    return (
      <section>
      <h1>Home</h1>
      <button onClick={ goToList }>List Trips</button>
      <button onClick={ goToLogin }>Login</button>
    </section>
    );
  }
  
  export default HomePage;