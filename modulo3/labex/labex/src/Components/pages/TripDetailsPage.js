import React from "react";
import { useNavigate } from 'react-router-dom';
import { BackgroundTripDetails } from "../../Style";

function TripDetailsPage() {

// BOTÕES DE NAVEGAÇÃO //
  const navigate= useNavigate();
  const goToLastPage =() =>{
    navigate(-1)
  }
// BOTÕES DE NAVEGAÇÃO //
    return (
      <BackgroundTripDetails>
        <div>
          <h1>TripDetailsPage</h1>
          <button onClick={ goToLastPage }>Return</button>
        </div>
      </BackgroundTripDetails>
    );
  }
  
  export default TripDetailsPage;