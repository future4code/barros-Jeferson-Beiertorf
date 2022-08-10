import React from "react";
import { useNavigate } from 'react-router-dom';

function TripDetailsPage() {
  const navigate= useNavigate();
  
  const goToLastPage =() =>{
    navigate(-1)
  }
    return (
      <div>
        <h1>TripDetailsPage</h1>
        <button onClick={ goToLastPage }>Return</button>
      </div>
    );
  }
  
  export default TripDetailsPage;