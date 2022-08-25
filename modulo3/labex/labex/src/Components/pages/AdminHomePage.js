import axios from "axios";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { BackgroundAdmin } from "../../Style";
import { BASE_URL } from "../Constants/Constants";
import { CardAdm } from "../Hooks/useCards";
import { useProtectPage } from "../Hooks/useProtectPage";

function AdminHomePage() {
  useProtectPage();


  //NAVEGAÇÃO//
  const navigate= useNavigate();
  const goToCreate = () =>{
    navigate("/create-trip")
  }
  const goToLogin =() =>{
    navigate("/login-page")
  }
  const goToHome =() =>{
    navigate("/")
  }
  //NAVEGAÇÃO//
  
    return (

      <BackgroundAdmin>
        <section>
          <h1>ADMIN PAGE</h1>
          <div className="button">
            <button onClick={ goToHome }>Home</button>
            <button onClick={ goToCreate }>Create Trip</button>
            <button onClick={ goToLogin }>Logout</button>
          </div>
        </section>
        <div className="card-adm">
          <h2>List Trips</h2>
          <div card-container>
            <CardAdm></CardAdm>
          </div>
        </div>
      </BackgroundAdmin>
    );
  }
  
  export default AdminHomePage;