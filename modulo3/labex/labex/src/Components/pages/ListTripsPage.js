import React from "react";
import { useNavigate } from 'react-router-dom';

function ListTripsPage() {
  const navigate= useNavigate();

  const goToLastPage =() =>{
    navigate(-1)
  }
  
  const goToSubscribe = () =>{
    navigate("/form-page")
  }

    return (
      <div>
        <h1>LIST TRIPS</h1>
        <button onClick={ goToLastPage }>Return</button>
        <button onClick={ goToSubscribe }>Subscribe</button>
      </div>
    );
  }
  
  export default ListTripsPage;